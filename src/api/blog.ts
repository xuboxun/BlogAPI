import { Context } from 'koa';
import ResData from '../interface/ResData';


const getBlogList = async (ctx: Context): Promise<ResData> => {
    const data = {
        code: 200,
        msg: 'list',
        result: [
            { id: 1, name: 'name1' },
            { id: 2, name: 'name2' },
            { id: 3, name: 'name3' }
        ]
    };
    return data;
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
