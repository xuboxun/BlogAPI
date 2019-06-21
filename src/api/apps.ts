import axios from 'axios';
import {Context} from 'koa';
import ResData from '../interface/ResData';

const getFoodMenus = async (ctx: Context): Promise<ResData> => {
    const query = {
        day: +ctx.query.day || 0, // 默认0，今日菜单
    };
    let resData = {
        code: 200,
        msg: 'get food menus',
        result: {}
    };

    let res = null;
    try {
        res = await axios.get(`http://crystalpot.cn/menus/${query.day}`);

        if (res.status === 200) {
            const html = res.data.replace(/([\s\S]*)<body>([\s\S]*)<\/body>([\s\S]*)/, (match: String, p1: String, p2: String) => {
                return p2;
            }).replace('&nbsp;', '');
            resData.result = {
                content: html
            };
        }
    } catch (e) {
        resData = {
            code: 500,
            msg: 'get food menus error',
            result: null
        };
    }

    return resData;
};


const appsRouterConfig = [
    {
        method: 'get',
        url: '/apps/food-menus',
        handle: getFoodMenus
    }
];
export default appsRouterConfig;
