import {Context} from 'koa';
import { AdminModel } from '../db';
import ResData from '../interface/ResData';
import checkLogin from '../util/checkLogin';

const authentication = async (ctx: Context): Promise<ResData> => {
    let resData = {
        code: 200,
        msg: 'get authentication',
        result: {}
    };
    if (checkLogin(ctx)) {
        resData.result = {
            login: true
        };
    } else {
        resData.result = {
            login: false
        };
    }
    return resData;
};

const login = async (ctx: Context): Promise<ResData> => {
    // @ts-ignore
    const info: {
        account: string,
        password: string,
        code: string
    } = ctx.request.body;

    let resData = {
        code: 200,
        msg: 'login success',
        result: {}
    };

    let queryFind = await AdminModel.find({
        attributes: ['id', 'account', 'email', 'createTime', 'updateTime'],
        where: {
            account: info.account,
            password: info.password
        }
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'login query err';
        return null;
    });
    if (queryFind) {
        resData.result = queryFind;
        ctx.session.admin = queryFind.account;
    } else {
        resData.msg = 'login failed, account/password error';
        resData.result = null;
    }

    return resData;
};

const logout = async (ctx: Context): Promise<ResData> => {
    ctx.session.admin = null;
    return {
        code: 200,
        msg: 'logout success',
        result: {}
    };
};



const loginRouterConfig = [
    {
        method: 'get',
        url: '/admin/authentication',
        handle: authentication
    },
    {
        method: 'post',
        url: '/admin/login',
        handle: login
    },
    {
        method: 'get',
        url: '/admin/logout',
        handle: logout
    }
];
export default loginRouterConfig;
