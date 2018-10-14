import { Context } from 'koa';
import { Sequelize } from 'sequelize-typescript';
import ResData from '../interface/ResData';
import BlogModel from '../models/Blog';
import TagModel from '../models/Tag';
import BlogTagModel from '../models/BlogTag';


const getBlogList = async (ctx: Context): Promise<ResData> => {
    const query = {
        pageSize: +ctx.query.pageSize || 10,
        pageNum: +ctx.query.pageNum || 1
    };
    let blogList = [];

    const queryBlogList = await BlogModel.findAll({
        attributes: ['id', 'name', 'title', 'type', 'content', 'create_time'],
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
    const query = ctx.query;
    const data = {
        code: 200,
        msg: 'getBlogDetail',
        result: {
            title: 'title',
            content: 'content',
            author: 'huangyifan',
            query
        }
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
        url: '/blog/list',
        handle: getBlogList
    }
];
export default blogRouterConfig;
