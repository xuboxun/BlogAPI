import { Context } from 'koa';
import ResData from '../interface/ResData';
import ISerial from '../interface/Serial';

const getSerial = async (ctx: Context): Promise<ResData> => {
    const serialId = ctx.query.id;

    const data = {
        code: 200,
        msg: 'getSerial',
        result: {},
    };

    return data;
};

const getSerialList = async (ctx: Context): Promise<ResData> => {
    const data = {
        code: 200,
        msg: 'getTag',
        result: {
            items: [
                { id: 1 }
            ],
            total: 0
        }
    };

    return data;
};

const serialRouterConfig = [
    {
        method: 'get',
        url: '/serial/detail',
        handle: getSerial
    },
    {
        method: 'get',
        url: '/serial/list',
        handle: getSerialList
    }
];
export default serialRouterConfig;
