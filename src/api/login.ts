import {Context} from 'koa';
import * as md5 from 'md5';
import * as svgCaptcha from 'svg-captcha';
import { AdminModel } from '../db';
import ResData from '../interface/ResData';
import checkLogin from '../util/checkLogin';

const authentication = async (ctx: Context): Promise<ResData> => {
    const resData = {
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

    if (info.code !== ctx.session.verifyCode) {
        resData = {
            code: 400,
            msg: 'login failed, wrong verify code',
            result: null
        };
        return resData;
    }

    let queryFind = await AdminModel.find({
        attributes: ['id', 'account', 'email', 'createTime', 'updateTime'],
        where: {
            account: info.account,
            password: md5(info.password)
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

const getCapture = async (ctx: Context): Promise<ResData> => {
        const captcha = svgCaptcha.create({
            color: true,
            width: 150,
            height: 35,
            fontSize: 40
        });
        ctx.session.verifyCode = captcha.text.toLowerCase();
        return {
            code: 200,
            msg: 'getCapture success',
            result: captcha.data
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
    },
    {
        method: 'get',
        url: '/getCapture',
        handle: getCapture
    }
];
export default loginRouterConfig;
