import {Context} from 'koa';
import { Sequelize } from 'sequelize-typescript';
import ResData from '../interface/ResData';
import { SerialModel, BlogModel } from '../models';
import md5Id from '../util/md5Id';

const Op = Sequelize.Op;

const getSerialList = async (ctx: Context): Promise<ResData> => {
    let serials: any = await SerialModel.findAll({
        attributes: ['id', 'name', 'title']
    });
    const total = await SerialModel.count();
    return {
        code: 200,
        msg: 'getSerialList',
        result: {
            items: serials,
            total
        },
    };
};

const getSerialDetail = async (ctx: Context): Promise<ResData> => {
    const query = {
        id: ctx.query.id
    };
    const resData = {
        code: 200,
        msg: 'getSerialDetail',
        result: {},
    };
    const serial = await SerialModel.find({
        attributes: ['id', 'name', 'title', 'description', 'createTime'],
        where: {
            id: query.id
        },
        include: [{
            model: BlogModel,
            attributes: ['id', 'title', 'name', 'type']
        }]
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'getSerialDetail sql error';
        return null;
    });
    resData.result = serial;
    return resData;
};

const addSerial = async (ctx: Context): Promise<ResData> => {
    // @ts-ignore
    const info: {
        name: string;
        title: string;
        description: string;
    } = ctx.request.body;
    const resData = {
        code: 200,
        msg: 'addSerial',
        result: 'true'
    };
    resData.result = await SerialModel.create({
        id: md5Id({
            type: 'serial',
            name: info.name
        }),
        name: info.name,
        title: info.title,
        description: info.description,
        createTime: Date.now()
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'addSerial error';
        return null;
    });
    return resData;
};

const checkExist = async (ctx: Context): Promise<ResData> => {
    // @ts-ignore
    const info: {
        name: string;
        title: string;
    } = ctx.request.body;
    const resData = {
        code: 200,
        msg: 'checkSerialExist',
        result: {}
    };
    resData.result = await SerialModel.find({
        attributes: ['id', 'name', 'title', 'description'],
        where: {
            [Op.or]: [
                { name: info.name },
                { title: info.title }
            ]
        }
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'checkSerialExist sql error';
        return null;
    });
    return resData;
};

const serialRouterConfig = [
    {
        method: 'get',
        url: '/serial/list',
        handle: getSerialList
    },
    {
        method: 'get',
        url: '/serial/detail',
        handle: getSerialDetail
    },
    {
        method: 'post',
        url: '/serial/add',
        handle: addSerial
    },
    {
        method: 'post',
        url: '/serial/checkExist',
        handle: checkExist
    }
];
export default serialRouterConfig;
