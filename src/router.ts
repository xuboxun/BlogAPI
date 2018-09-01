import * as Router from 'koa-router';
import * as Blog from './api/blog';

const router = new Router();

router.prefix('/api');

Blog.register(router);

export default router;
