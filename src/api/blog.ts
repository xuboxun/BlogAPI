import {Context} from 'koa';
import ResData from '../interface/ResData';
import { BlogModel, BlogSerialModel, BlogTagModel, Op, TagModel } from '../models';
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
        include: [{
            model: TagModel,
            attributes: ['id', 'title', 'name']
        }]
    });
    blogList = queryBlogList.map((item) => {
        const blog = item.toJSON();
        blog.tags = blog.tags.map((tag: any) => {
            delete tag.BlogTagModel;
            return tag;
        });
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
        id: ctx.query.id
    };
    const queryBlogDetail = await BlogModel.find({
        attributes: ['id', 'name', 'title', 'type', 'content', 'createTime'],
        where: {
            id: query.id
        },
        include: [{
            model: TagModel,
            attributes: ['id', 'title', 'name']
        }]
    });
    const blogDetail = queryBlogDetail.toJSON();
    blogDetail.tags = blogDetail.tags.map((tag: any) => {
        delete tag.BlogTagModel;
        return tag;
    });
    return {
        code: 200,
        msg: 'getBlogDetail',
        result: blogDetail
    };
};

const addBlog = async (ctx: Context): Promise<ResData> => {
    // @ts-ignore
    const info: {
        title: string;
        name: string;
        content: string;
        type: string;
        tagIds: string[] | undefined;
        serialId: string | undefined;
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
            blog_id: queryAddBlog.id,
            serial_id: info.serialId
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
                blog_id: queryAddBlog.id,
                tag_id: tagId
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

const checkExist = async (ctx: Context): Promise<ResData> => {
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
        method: 'post',
        url: '/blog/add',
        handle: addBlog
    },
    {
        method: 'get',
        url: '/blog/checkExist',
        handle: checkExist
    }
];
export default blogRouterConfig;
