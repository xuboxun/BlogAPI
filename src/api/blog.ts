import { Context } from 'koa';
import * as Router from 'koa-router';

import ResData from '../interface/ResData';


const list = async (ctx: Context, next: Function): Promise<ResData> => {
    ctx.body = {
        code: 200,
        msg: 'list',
        data: [
            { id: 1, name: 'name1' },
            { id: 2, name: 'name2' },
            { id: 3, name: 'name3' }
        ]
    };
    return ctx.body;
};

const detail = async (ctx: Context, next: Function): Promise<ResData> => {
    const data = ctx.request.query;
    ctx.body = {
        title: 'title',
        content: 'content',
        author: 'huangyifan',
        data
    };
    return ctx.body;
};


export let register = (router: Router) => {
    router.get('/list', list);
    router.get('/detail', detail);
};
