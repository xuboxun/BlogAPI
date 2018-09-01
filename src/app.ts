import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import router from './router';

const app = new Koa();

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());


// response
app.use(async (ctx: Koa.Context) => {
  ctx.body = '404';
});

app.listen(3000);
