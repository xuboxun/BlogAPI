import * as Router from 'koa-router';
import * as Blog from './api/blog';
import * as Tag from './api/tag';
import {Context} from "koa";
import ResData from "./interface/ResData";

const router = new Router();

router.prefix('/api');

router.get('/', (ctx: Context, next: Function) => {
    ctx.body = 'this is api';
});

Blog.register(router);
Tag.register(router);

export default router;
