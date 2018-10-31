import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { connect } from './db';
import router from './router';

const app = new Koa();
connect();

app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
