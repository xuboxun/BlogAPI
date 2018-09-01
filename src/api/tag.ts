import { Context } from 'koa';
import ResData from '../interface/ResData';
import ITag from '../interface/Tag';

const getTag: (ctx: Context, next: Function) => Promise<ResData> = async (ctx: Context, next: Function): Promise<ResData> => {
    ctx.body = {
        code: 200,
        msg: 'getTag',
        data: null,
    };

    return ctx.body;
};



const getTags: (ctx: Context, next: Function) => Promise<ResData> = async (ctx: Context, next: Function): Promise<ResData> => {
    ctx.body = {
        code: 200,
        msg: 'getTag',
        data: null,
    };

    return ctx.body;
};
