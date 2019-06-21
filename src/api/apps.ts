import axios from 'axios';
import {decode} from 'iconv-lite';
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
            const html = res.data
                .replace(/[\s\S]*?(<div[^<>]*?class="m-cnt"[\s\S]*?>[\s\S]*?)<div[\s\S]*?class="m-count">[\s\S]*/, (match: String, p1: String) => {
                    return p1;
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

const getNovelNew = async (ctx: Context): Promise<ResData> => {
    let resData = {
        code: 200,
        msg: 'get novel success',
        result: {}
    };

    let getNewInfo = null;
    try {
        // @ts-ignore
        getNewInfo = await axios({
            url: 'http://m.biquge.cm/wapbook/9036.html',
            responseType: 'arraybuffer',
            responseEncoding: 'gbk'
        });
        let newTitle = '';
        let newContent = '';

        if (getNewInfo.status === 200) {
            const filterStr = /最新：<a[\s\S]*?href="([\s\S]*?)">([\s\S]*?)<\/a>/.exec(decode(getNewInfo.data, 'gbk'));

            newTitle = filterStr[2];
            const newLink = `http://m.biquge.cm/${filterStr[1]}`;

            // @ts-ignore
            const getNewContent = await axios({
                url: newLink,
                responseType: 'arraybuffer',
                responseEncoding: 'gbk'
            });
            if (getNewContent.status === 200) {
                const filterContent = /<div[^<>]*?id="novelcontent"[\s\S]*?<\/div>/.exec(decode(getNewContent.data, 'gbk'));

                newContent = filterContent[0];

                resData.result = {
                    title: newTitle,
                    content: newContent
                };
            } else {
                resData = {
                    code: 400,
                    msg: 'get novel content error',
                    result: null
                };
            }
        } else {
            resData = {
                code: 400,
                msg: 'get novel new info error',
                result: null
            };
        }
    } catch (e) {
        console.log(e);
        resData = {
            code: 500,
            msg: 'get novel new error',
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
    },
    {
        method: 'get',
        url: '/apps/novel-new',
        handle: getNovelNew
    }
];
export default appsRouterConfig;
