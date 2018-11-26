import {Context} from 'koa';
import {BlogModel, Op, SerialModel, TagModel} from '../db';
import ResData from '../interface/ResData';
import checkLogin from '../util/checkLogin';
import md5Id from '../util/md5Id';

const getSerialList = async (ctx: Context): Promise<ResData> => {
    let serials: any = await SerialModel.findAll({
        attributes: ['id', 'name', 'title', 'createTime'],
        include: [{
            model: BlogModel,
            attributes: ['id', 'title', 'name', 'createTime'],
        }],
        order: [
            ['createTime', 'desc'],
            [ { model: BlogModel, as: 'blogs' }, 'createTime', 'DESC']
        ]
    });
    // @ts-ignore
    serials = serials.map((item) => {
        const serial = item.toJSON();
        serial.recent = serial.blogs[0] || null;
        if (serial.recent && serial.recent.BlogSerialModel) {
            delete serial.recent.BlogSerialModel;
        }
        delete serial.blogs;
        return serial;
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
        name: ctx.query.name
    };
    const resData = {
        code: 200,
        msg: 'getSerialDetail',
        result: {},
    };
    const serial = await SerialModel.find({
        attributes: ['id', 'name', 'title', 'description', 'createTime'],
        where: {
            name: query.name
        },
        include: [{
            model: BlogModel,
            attributes: ['id', 'title', 'name', 'type']
        }],
        order: [
            [{ model: BlogModel, as: 'blogs' }, 'createTime', 'DESC'],
        ]
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
    if (!checkLogin(ctx)) {
        return {
            code: 401,
            msg: 'not login',
            result: null
        };
    }
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

const editSerial = async (ctx: Context): Promise<ResData> => {
    if (!checkLogin(ctx)) {
        return {
            code: 401,
            msg: 'not login',
            result: null
        };
    }
    // @ts-ignore
    const info: {
        id: string,
        name: string;
        title: string;
        description: string;
    } = ctx.request.body;
    const resData = {
        code: 200,
        msg: 'editSerial',
        result: 'true'
    };
    resData.result = await SerialModel.update({
        name: info.name,
        title: info.title,
        description: info.description,
    }, {
        where: {
            id: info.id
        }
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'edit serial err';
        return null;
    });
    return resData;
};

const checkExist = async (ctx: Context): Promise<ResData> => {
    if (!checkLogin(ctx)) {
        return {
            code: 401,
            msg: 'not login',
            result: null
        };
    }
    const query = {
        name: ctx.query.name,
        title: ctx.query.title
    };
    const resData = {
        code: 200,
        msg: 'checkSerialExist',
        result: {}
    };
    resData.result = await SerialModel.find({
        attributes: ['id', 'name', 'title', 'description'],
        where: {
            [Op.or]: [
                { name: query.name },
                { title: query.title }
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
        url: '/serial/edit',
        handle: editSerial
    },
    {
        method: 'get',
        url: '/serial/checkExist',
        handle: checkExist
    }
];
export default serialRouterConfig;
