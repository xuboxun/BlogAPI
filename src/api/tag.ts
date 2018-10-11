import { Context } from 'koa';
import * as Router from 'koa-router';
import ResData from '../interface/ResData';
import ITag from '../interface/Tag';
import { Tag as TagModel} from '../models/Tag';


const getTag = async (ctx: Context, next: Function): Promise<ResData> => {
    ctx.body = {
        code: 200,
        msg: 'getTag',
        data: null,
    };

    return ctx.body;
};

const getTags = async (ctx: Context, next: Function): Promise<ResData> => {
    let data: any = await TagModel.findAll();
    console.log(data);
    ctx.body = {
        code: 200,
        msg: 'getTag',
        data,
    };

    return ctx.body;
};


export let register = (router: Router) => {
    router.get('/tag', getTag);
    router.get('/taglist', getTags);
};
