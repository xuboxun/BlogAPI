import { Context } from 'koa';
import { Sequelize } from 'sequelize-typescript';
import ResData from '../interface/ResData';
import {BlogModel, TagModel} from '../models';
import md5Id from '../util/md5Id';

const Op = Sequelize.Op;

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
        id: ctx.query.id
    };
    const resData = {
        code: 200,
        msg: 'getTag',
        result: {},
    };
    const tag = await TagModel.find({
        attributes: ['id', 'name', 'title', 'description', 'createTime'],
        where: {
            id: query.id
        },
        include: [{
            model: BlogModel,
            attributes: ['id', 'title', 'name', 'type']
        }]
    }).catch(err => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'getDetail error';
        return null;
    });
    resData.result = tag;
    return resData;
};


const addTag = async (ctx: Context): Promise<ResData> => {
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

const checkExist = async (ctx: Context): Promise<ResData> => {
    // @ts-ignore
    const info: {
        name: string;
        title: string;
    } = ctx.request.body;
    const resData = {
        code: 200,
        msg: 'checkTagExist',
        result: {}
    };
    resData.result = await TagModel.find({
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
        url: '/tag/checkExist',
        handle: checkExist
    }
];
export default tagRouterConfig;
