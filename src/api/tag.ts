import { Context } from 'koa';
import { BlogModel, Op, TagModel } from '../db';
import ResData from '../interface/ResData';
import checkLogin from '../util/checkLogin';
import md5Id from '../util/md5Id';

const getTagList = async (ctx: Context): Promise<ResData> => {
    let tags: any = await TagModel.findAll({
        attributes: ['id', 'name', 'title']
    });
    const total = await TagModel.count();
    const data = {
        code: 200,
        msg: 'getTag',
        result: {
            items: tags,
            total
        },
    };

    return data;
};

const getTagDetail = async (ctx: Context): Promise<ResData> => {
    const query = {
        name: ctx.query.name
    };
    const resData = {
        code: 200,
        msg: 'getTagDetail',
        result: {},
    };
    const tag = await TagModel.find({
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
        resData.msg = 'getDetail error';
        return null;
    });
    resData.result = tag;
    return resData;
};


const addTag = async (ctx: Context): Promise<ResData> => {
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
        msg: 'addTag',
        result: 'true'
    };
    resData.result = await TagModel.create({
        id: md5Id({
            type: 'tag',
            name: info.name
        }),
        name: info.name,
        title: info.title,
        description: info.description,
        createTime: Date.now()
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'addTag error';
        return null;
    });
    return resData;
};

const updateTag = async (ctx: Context): Promise<ResData> => {
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
        msg: 'editTag',
        result: 'true'
    };
    resData.result = await TagModel.update({
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
        resData.msg = 'edit tag err';
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
        msg: 'checkTagExist',
        result: {}
    };
    resData.result = await TagModel.find({
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
        resData.msg = 'checkTagExist sql error';
        return null;
    });
    return resData;
};


const tagRouterConfig = [
    {
        method: 'get',
        url: '/tag/list',
        handle: getTagList
    },
    {
        method: 'get',
        url: '/tag/detail',
        handle: getTagDetail
    },
    {
        method: 'post',
        url: '/tag/add',
        handle: addTag
    },
    {
        method: 'post',
        url: '/tag/edit',
        handle: updateTag
    },
    {
        method: 'get',
        url: '/tag/checkExist',
        handle: checkExist
    }
];
export default tagRouterConfig;
