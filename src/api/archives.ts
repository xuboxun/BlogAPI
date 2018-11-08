import {Context} from 'koa';
import {BlogModel, Op, SerialModel, TagModel} from '../db';
import ResData from '../interface/ResData';

const getArchives = async (ctx: Context): Promise<ResData> => {
    let resData = {
        code: 200,
        msg: 'get Archives',
        result: {}
    };

    const blogList = await BlogModel.findAll({
        attributes: ['id', 'name', 'title', 'type', 'createTime'],
        order: [ ['createTime', 'DESC'] ],
    }).catch((err) => {
        console.log(err);
        resData.code = 500;
        resData.msg = 'getArchives error';
        return [];
    });

    const total = await BlogModel.count().catch((err) => {
        return 0;
    });

    resData.result = {
        items: blogList,
        total
    };

    return resData;
};


const archivesRouterConfig = [
    {
        method: 'get',
        url: '/archives',
        handle: getArchives
    }
];
export default archivesRouterConfig;
