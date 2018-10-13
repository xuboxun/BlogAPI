/**
 * 博客详情数据结构定义
 */

export default interface IBlog {
    id: string; // 唯一标识
    title: string; // 题目
    content: string; // 内容

    type: string; // 博客类型： tech culture serial
    tags: object[]; // 所属标签列表 {name, title}
    serial: string; // 所属专栏

    weather: string; // 天气
    location: string; // 地点

    createTime: Date; // 创建时间
    updateTime: Date; // 更新时间

}
