import {Context} from 'koa';

export default function checkLogin(ctx: Context) {
    if (ctx.session.admin) {
        return true;
    }
    return false;
}
