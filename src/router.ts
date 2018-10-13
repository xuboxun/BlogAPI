import { Context } from 'koa';
import * as Router from 'koa-router';
import apis from './api';

const router = new Router();

router.prefix('/api');

router.get('/', (ctx: Context, next: Function) => {
    ctx.body = 'this is api';
});

apis.forEach((api) => {
    // @ts-ignore
    router[api.method](api.url, async (ctx: Context) => {
        ctx.body = await api.handle(ctx);
    });
});

router.get('*', (ctx: Context, next: Function) => {
    ctx.body = 'this is 404 page';
});

export default router;
