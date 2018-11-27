import {Context} from 'koa';
import { VersionModel } from '../db';
import ResData from '../interface/ResData';
import checkLogin from '../util/checkLogin';

const versionList = async (ctx: Context): Promise<ResData> => {
    const resData = {
        code: 200,
        msg: 'get version',
        result: {}
    };
    const versions = await VersionModel.findAll({
        attributes: ['version', 'description', 'createTime'],
        order: [ ['createTime', 'DESC'] ],
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'find version sql error';
        return null;
    });
    if (versions) {
        resData.result = {
            items: versions,
            total: versions.length
        };
    } else {
        resData.result = null;
    }
    return resData;
};

const addVersion = async (ctx: Context): Promise<ResData> => {
    if (!checkLogin(ctx)) {
        return {
            code: 401,
            msg: 'not login',
            result: null
        };
    }
    // @ts-ignore
    const info: {
        version: string;
        description: string;
    } = ctx.request.body;
    const resData = {
        code: 200,
        msg: 'add version success',
        result: {}
    };
    resData.result = await VersionModel.create({
        version: info.version,
        description: info.description
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'add version error';
        return null;
    });
    return resData;
};

const SystemRouterConfig = [
    {
        method: 'get',
        url: '/system/version',
        handle: versionList
    },
    {
        method: 'post',
        url: '/system/version',
        handle: addVersion
    }
];
export default SystemRouterConfig;
