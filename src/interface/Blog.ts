/**
 * 博客详情数据结构定义
 */

export default interface IBlog {
    id: number; // 唯一标识
    title: string; // 题目
    content: string; // 内容

    tagId: number[];

    weather: string; // 天气
    location: string; // 地点

    createTime: Date; // 创建时间
    updateTime: Date; // 更新时间

}
