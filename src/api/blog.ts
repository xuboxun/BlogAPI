import { Context } from 'koa';
import { Sequelize } from 'sequelize-typescript';
import ResData from '../interface/ResData';
import BlogModel from '../models/table/Blog';
import TagModel from '../models/table/Tag';
import BlogTagModel from '../models/table/BlogTag';


const getBlogList = async (ctx: Context): Promise<ResData> => {
    const query = {
        pageSize: +ctx.query.pageSize || 10,
        pageNum: +ctx.query.pageNum || 1
    };
    let blogList = [];

    const queryBlogList = await BlogModel.findAll({
        attributes: ['id', 'name', 'title', 'type', 'create_time'],
        offset: query.pageSize * (query.pageNum - 1),
        limit: query.pageSize,
        order: [ ['create_time', 'DESC'] ],
        where: {
            type: 'tech'
        }
    });
    for(let i = 0; i < queryBlogList.length; i++) {
        const item = queryBlogList[i];
        const tags = await BlogTagModel.findAll({
            attributes: ['tag_id'],
            where: {
                blog_id: item.id
            }
        });

        blogList.push({
            id: item.id,
            name: item.name,
            title: item.title,
            type: item.type,
            content: item.content,
            createTime: item.create_time,
            tags: tags
        });
    }
    const total = await BlogModel.count({
        where: {
            type: 'tech'
        }
    });
    return {
        code: 200,
        msg: 'list',
        result: {
            items: blogList,
            total: total
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
        }
    });
    const blogDetail = {
        id: queryBlogDetail.id,
        name: queryBlogDetail.name,
        title: queryBlogDetail.title,
        content: queryBlogDetail.content,
        createTime:  queryBlogDetail.create_time,
        tags: [
            { id: 't1', name: 't1', title: '标签1' },
            { id: 't2', name: 't2', title: '标签2' },
        ]
    };
    const data = {
        code: 200,
        msg: 'getBlogDetail',
        result: blogDetail
    };
    return data;
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
    }
];
export default blogRouterConfig;
