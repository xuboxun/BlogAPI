import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import router from './router';
import { sequelize } from './sequelize';

const app = new Koa();

sequelize.sync();

app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
