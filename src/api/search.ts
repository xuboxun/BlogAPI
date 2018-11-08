import {Context} from 'koa';
import {BlogModel, Op, SerialModel, TagModel} from '../db';
import ResData from '../interface/ResData';

const search = async (ctx: Context): Promise<ResData> => {
    const query = {
        pageSize: +ctx.query.pageSize || 10,
        pageNum: +ctx.query.pageNum || 1,
    };
    let blogList: any[];
    let total: number;

    const queryBlogList = await BlogModel.findAll({
        attributes: ['id', 'name', 'title', 'type', 'createTime'],
        offset: query.pageSize * (query.pageNum - 1),
        limit: query.pageSize,
        order: [ ['createTime', 'DESC'] ],
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

    total = await BlogModel.count();
    return {
        code: 200,
        msg: 'search',
        result: {
            items: blogList,
            total
        }
    };
};


const searchRouterConfig = [
    {
        method: 'get',
        url: '/search',
        handle: search
    }
];
export default searchRouterConfig;
