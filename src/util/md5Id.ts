/**
 * 生成id值
 */

// const MD5 = require('md5.js');

import * as md5 from 'md5';

interface IdPayload {
    // 前缀, 标识id类型, eg: 'blog', 'tag'
    type: string;

    // 原始id命名
    name: string;
};

const md5Id: (payload: IdPayload) => string =
    (payload) => {
        const sourceStr = payload.type + '_' + payload.name;
        return md5(sourceStr);
    };

export default md5Id;
