import {Context} from 'koa';
import {BlogModel, BlogSerialModel, BlogTagModel, Op, SerialModel, TagModel} from '../db';
import ResData from '../interface/ResData';
import checkLogin from '../util/checkLogin';
import md5Id from '../util/md5Id';

const getBlogList = async (ctx: Context): Promise<ResData> => {
    const query = {
        pageSize: +ctx.query.pageSize || 10,
        pageNum: +ctx.query.pageNum || 1,
        type: ctx.query.type || ''
    };
    let blogList: any[];
    let total: number;

    const where = query.type ? { type: query.type } : {};

    const queryBlogList = await BlogModel.findAll({
        attributes: ['id', 'name', 'title', 'type', 'createTime'],
        offset: query.pageSize * (query.pageNum - 1),
        limit: query.pageSize,
        order: [ ['createTime', 'DESC'] ],
        where,
        include: [
            {
                model: TagModel,
                attributes: ['id', 'title', 'name']
            },
            {
                model: SerialModel,
                attributes: ['id', 'title', 'name']
            }
        ]
    });
    blogList = queryBlogList.map((item) => {
        const blog = item.toJSON();
        if (blog.type === 'serial') {
            const serial = blog.serial[0];
            delete serial.BlogSerialModel;
            blog.serial = serial;
            delete blog.tags;
        } else {
            blog.tags = blog.tags.map((tag: any) => {
                delete tag.BlogTagModel;
                return tag;
            });
            delete blog.serial;
        }
        return blog;
    });

    total = await BlogModel.count({
        where
    });
    return {
        code: 200,
        msg: 'list',
        result: {
            items: blogList,
            total
        }
    };
};

const getBlogDetail = async (ctx: Context): Promise<ResData> => {
    const query = {
        name: ctx.query.name
    };
    const queryBlogDetail = await BlogModel.find({
        attributes: ['id', 'name', 'title', 'type', 'content', 'createTime'],
        where: {
            name: query.name
        },
        include: [
            {
                model: TagModel,
                attributes: ['id', 'title', 'name']
            },
            {
                model: SerialModel,
                attributes: ['id', 'title', 'name']
            }
        ]
    });
    const blogDetail = queryBlogDetail.toJSON();
    if (blogDetail.type === 'serial') {
        const serial = blogDetail.serial[0];
        delete serial.BlogSerialModel;
        blogDetail.serial = serial;
        delete blogDetail.tags;
    } else {
        blogDetail.tags = blogDetail.tags.map((tag: any) => {
            delete tag.BlogTagModel;
            return tag;
        });
        delete blogDetail.serial;
    }
    return {
        code: 200,
        msg: 'getBlogDetail',
        result: blogDetail
    };
};

const addBlog = async (ctx: Context): Promise<ResData> => {
    if (!checkLogin(ctx)) {
        return {
            code: 401,
            msg: 'not login',
            result: null
        };
    }
    // @ts-ignore
    const info: {
        title: string;
        name: string;
        content: string;
        type: string;
        tagIds?: string[];
        serialId?: string;
    } = ctx.request.body;

    let resData = {
        code: 200,
        msg: 'addBlog',
        result: {}
    };

    const queryAddBlog = await BlogModel.create({
        id: md5Id({
            type: 'blog',
            name: info.name
        }),
        title: info.title,
        name: info.name,
        content: info.content,
        type: info.type,
        createTime: Date.now()
    }).catch((err) => {
        console.log(err);
        resData = {
            code: 500,
            msg: 'addBlog error',
            result: null
        };
        return resData;
    });
    resData.result = queryAddBlog;

    if (info.type === 'serial') {
        await BlogSerialModel.create({
            // @ts-ignore
            blogId: queryAddBlog.id,
            serialId: info.serialId
        }).catch((err) => {
            console.log(err);
            BlogModel.destroy({
                where: {
                    // @ts-ignore
                    id: queryAddBlog.id
                }
            });
            resData = {
                code: 500,
                msg: 'add BlogSerialModel error',
                result: null
            };
        });
    } else {
        await BlogTagModel.bulkCreate(info.tagIds.map((tagId) => {
            return {
                // @ts-ignore
                blogId: queryAddBlog.id,
                tagId
            };
        })).catch((err) => {
            console.log(err);
            BlogModel.destroy({
                where: {
                    // @ts-ignore
                    id: queryAddBlog.id
                }
            });
            resData = {
                code: 500,
                msg: 'add BlogTagModel error',
                result: null
            };
        });
    }

    return resData;
};

const updateBlog = async (ctx: Context): Promise<ResData> => {
    if (!checkLogin(ctx)) {
        return {
            code: 401,
            msg: 'not login',
            result: null
        };
    }
    // @ts-ignore
    const info: {
        id: string,
        title: string;
        name: string;
        content: string;
        type: string;
        tagIds?: string[];
        serialId?: string;
    } = ctx.request.body;

    const resData = {
        code: 200,
        msg: 'update blog success',
        result: {}
    };

    await BlogTagModel.destroy({
        where: {
            blogId: info.id
        }
    });
    await BlogSerialModel.destroy({
        where: {
            blogId: info.id
        }
    });
    let updateRelate = null;
    if (info.type === 'serial') {
        updateRelate = await BlogSerialModel.create({
            blogId: info.id,
            serialId: info.serialId
        }).catch((err) => {
            console.log(err);
            resData.code = 500;
            resData.msg = 'add BlogSerialModel error';
            return null;
        });
    } else {
        updateRelate = await BlogTagModel.bulkCreate(info.tagIds.map((tagId) => {
            return {
                blogId: info.id,
                tagId
            };
        })).catch((err) => {
            console.log(err);
            resData.code = 500;
            resData.msg = 'add BlogTagModel error';
            return null;
        });
    }

    let queryUpdate = null;
    if (updateRelate) {
        queryUpdate = await BlogModel.update({
            name: info.name,
            title: info.title,
            content: info.content,
            type: info.type
        }, {
            where: {
                id: info.id
            }
        }).catch((err) => {
            console.log(err);
            resData.code = 500;
            resData.msg = 'update blog err';
            return null;
        });
    }
    resData.result = queryUpdate;

    return resData;
};

// const getMostView = async (ctx: Context): Promise<ResData> => {
//
// }

const checkExist = async (ctx: Context): Promise<ResData> => {
    if (!checkLogin(ctx)) {
        return {
            code: 401,
            msg: 'not login',
            result: null
        };
    }
    const query = {
        name: ctx.query.name,
        title: ctx.query.title
    };
    const resData = {
        code: 200,
        msg: 'checkBlogExist',
        result: {}
    };
    resData.result = await BlogModel.find({
        attributes: ['id', 'name', 'title'],
        where: {
            [Op.or]: [
                { name: query.name },
                { title: query.title }
            ]
        }
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'checkBlogExist sql error';
        return null;
    });
    return resData;
};

const blogRouterConfig = [
    {
        method: 'get',
        url: '/blog/list',
        handle: getBlogList
    },
    {
        method: 'get',
        url: '/blog/detail',
        handle: getBlogDetail
    },
    {
        method: 'get',
        url: '/blog/checkExist',
        handle: checkExist
    },
    {
        method: 'post',
        url: '/blog/add',
        handle: addBlog
    },
    {
        method: 'post',
        url: '/blog/update',
        handle: updateBlog
    }
];
export default blogRouterConfig;
