/**
 * 日志
 */

enum LogCode {
    // 开发调试
    Dev = 0,

    // 运行时错误
    RuntimeError = 100,

    // 数据库执行
    SQL = 200,


    // 服务端操作日志
    Server = 300,

    // 客户端事件、埋点
    Client = 400,

}

export default interface ILog {

    // 日志代码
    code: LogCode;

    // 输出信息
    info: string;

    // 日志时间
    time: Date;

    // 携带数据
    data?: object;

    // 来自哪个文件
    fromFile?: string;

    // -------------------- 客户端行为
    // 页面
    page?: string;
    // 地址
    url?: string;
    // 事件
    event?: string;

    // 环境，browser or node
    env?: string;

    // 系统, win or linux or mac
    system?: string;

    // 平台，手机 or PC or other
    plantform?: string;

    // ip地址
    ip?: string;

    // 所在城市
    city?: string;

}
