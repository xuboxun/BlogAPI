import { Context } from 'koa';
import ResData from '../interface/ResData';
import ITag from '../interface/Tag';
import TagModel from '../models/table/Tag.model';


const getTagDetail = async (ctx: Context): Promise<ResData> => {
    const data = {
        code: 200,
        msg: 'getTag',
        result: {},
    };

    return data;
};

const getTagList = async (ctx: Context): Promise<ResData> => {
    let tags: any = await TagModel.findAll();
    const data = {
        code: 200,
        msg: 'getTag',
        result: {
            items: tags,
            total: 100
        },
    };

    return data;
};


const tagRouterConfig = [
    {
        method: 'get',
        url: '/tag/list',
        handle: getTagList
    },
    {
        method: 'get',
        url: '/tag/detail',
        handle: getTagDetail
    }
];
export default tagRouterConfig;
