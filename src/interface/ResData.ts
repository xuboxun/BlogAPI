/**
 * 返回数据接口定义
 */

type SingleData = any;

interface IMultiData {
    items: any[];
    total: number;
}


export default interface IResData {
    code: number; // 状态码
    msg: string; // 接口描述
    result: SingleData | IMultiData; // 数据
}
