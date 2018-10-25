import {Context} from 'koa';
import ResData from '../interface/ResData';
import {BlogModel, TagModel, BlogTagModel} from '../models';


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
        attributes: ['id', 'name', 'title', 'type', 'create_time'],
        offset: query.pageSize * (query.pageNum - 1),
        limit: query.pageSize,
        order: [ ['create_time', 'DESC'] ],
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
        attributes: ['id', 'name', 'title', 'type', 'content', 'create_time'],
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
        title: String;
        name: String;
        content: String;
        type: String;
        tagIds: String[];
    } = ctx.request.body;

    const queryAddBlog = await BlogModel.create({
        id: +Date.now(),
        title: info.title,
        name: info.name,
        content: info.content,
        type: info.type,
        createTime: Date.now()
    });
    // @ts-ignore
    const queryAddBlogTag = await BlogTagModel.bulkCreate(info.tagIds.map((tagId) => {
        return {
            blog_id: queryAddBlog.id,
            tag_id: tagId
        };
    }));

    return {
        code: 200,
        msg: 'getBlogDetail',
        result: 'ok'
    };
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
    }
];
export default blogRouterConfig;
