/**
 * 返回数据接口定义
 */

import IBlog from './Blog';
import ITag from './Tag';

type SingleData = ITag | IBlog;

interface IMultiData {
    items: SingleData[];
    total: number;
}


export default interface IResData {
    code: number; // 状态码
    msg: string; // 接口描述
    data: SingleData | IMultiData; // 数据
}
