/**
 * 日志操作
 */


import ILog from '../interface/Log';

// 开发日志，直接console.log
export let devLog: (info: ILog) => void = (): void => {

};

// 捕获错误，写入数据库
export let RuntimeErrorLog: (info: ILog) => void = (): void => {

};

// 数据库执行日志
export let SQLLog: (info: ILog) => void = (): void => {

};


// 服务端日志：执行日志、请求信息、等，写库
export let ServerLog: (info: ILog) => void = (): void => {

};

// 客户端日志：访问信息、浏览信息、点击信息，埋点分析，接收客户端上传的信息写库
export let ClientLog: (info: ILog) => void = (): void => {

};
