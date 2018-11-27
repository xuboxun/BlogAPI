-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2018-11-27 21:47:40
-- 服务器版本： 5.7.24-0ubuntu0.16.04.1
-- PHP Version: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--
CREATE DATABASE IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `blog`;

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL COMMENT '自增id',
  `account` varchar(100) NOT NULL COMMENT '账号',
  `email` varchar(100) NOT NULL COMMENT '邮箱',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `account`, `email`, `password`, `create_time`, `update_time`) VALUES
(1, 'test', 'test@qq.com', '14e1b600b1fd579f47433b88e8d85291', '2018-11-13 00:00:00', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `blog`
--

CREATE TABLE `blog` (
  `id` varchar(100) NOT NULL COMMENT '博客id',
  `name` varchar(100) NOT NULL COMMENT '链接英文名称',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `type` varchar(100) NOT NULL COMMENT '博客类型',
  `content` text NOT NULL COMMENT '内容',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客列表';

--
-- 转存表中的数据 `blog`
--

INSERT INTO `blog` (`id`, `name`, `title`, `type`, `content`, `create_time`, `update_time`) VALUES
('25d24db7c5c3e1255f275f4b35849e7e', 'blog4', '博客四', 'culture', '描述描述描述描述描述描述描述描述描述描述描述描4444444', '2018-11-03 07:14:35', NULL),
('2856c99292388581748419c4bdf7a707', 'blog2', '博客二二二二二二二二二二二二二二二二二二二二', 'tech', '描述描述描述描述描述描述描述描述描述描述描述描述22222', '2018-11-03 07:11:55', NULL),
('36ed5bb50f895d56b3640668289e9be5', 'blog8', '博客bababab八', 'serial', '描述描述描述描述描述描述描述描述描述描述描述描88888', '2018-11-03 07:17:51', NULL),
('3c420d427ce4970447ae322e3786ab6d', 'tttttttt', 'ttttt', 'tech', '# asfadfsdaf\n* asdg\n* asdgdfsg\n\ndfgsdfgsd', '2018-11-12 07:55:05', NULL),
('41886f56da8e81173888aa5f7853fbb3', 'blog6', '博客六', 'tech', '描述描述描述描述描述描述描述描述描述描述描述描666', '2018-11-03 07:16:24', NULL),
('513dd65b5fec5cf1b079b75f5980646d', 'blog9', '博客九九九九九九九九九九九九九九九', 'serial', '描述描述描述描述描述描述描述描述描述描述描述描999999999999', '2018-11-03 07:18:24', NULL),
('5d4856736137f0c4f3741c3dc4f9dde8', 'blog3', '博客三', 'tech', '描述描述描述描述描述描述描述描述描述描述描述描述33333', '2018-11-03 07:12:34', NULL),
('8021739cde30505ae89d36b6169075e0', 'blog5', '博客五', 'culture', '描述描述描述描述描述描述描述描述描述描述描述描55555', '2018-11-03 07:15:54', NULL),
('94f7af0f34671e13bcf0b919d17d113d', 'blog7', '博客七', 'serial', '描述描述描述描述描述描述描述描述描述描述描述描777777', '2018-11-03 07:17:25', NULL),
('d144de3ad3f2682ea0da40f1b109d66b', 'blog1010', '博客十十十十十十十十十十十十十十十', 'serial', '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', '2018-11-08 06:04:19', NULL),
('dc536c324ca8a6ee6cc291be0ddac29a', 'css-code-style', '简谈CSS代码规范', 'tech', '[[toc]]\n\ncss的代码规范有很多，各大厂都有自己的规范文档，需要综合学习整理出适合自己、适合团队的规范。\n本文综合NEC、Airbnb的规范，因为在网易，所以主要还是以NEC的规范为主，综合其他的规范优点整理出自己以后写css的规范\n参考：\n1. http://nec.netease.com/standard/css-sort.html\n2. https://github.com/ecomfe/spec/blob/master/css-style-guide.md\n3. https://github.com/Zhangjd/css-style-guide\n\n### 分类方法及顺序\n1. 重置reset和默认base规则\n2. 布局grid: .g-，将页面分为几大块的，如头部，主体、底部等；\n3. 模块module：.m-，语义化可重用的较大整体，如导航、登录、列表等；\n4. 元件unit：.u-，不可再分的较小的个体，被重复用于各模块中，如按钮、输入框、图标等；\n5. 功能function：.f-，为方便一些常用样式的使用，将使用率较高的样式分离出来按需使用，如清除浮动等；\n6. 皮肤skin：.s-，皮肤型样式，通常为文字色、背景色、边框色等\n7. 状态：.z-，\n\n注意：\n1. 分类的命名方法：单字母 + \'-\' 为前缀https://github.com/ecomfe/spec/blob/master/css-style-guide.md\n2. .j-将被专用于js去获取节点，不要用.j-定义样式\n3. 如果上述分类无法满足要求，可自定义分类，但需符合单字母+\'-\'的规则，如.x-\n4. \'-\'不表示连字符含义，只表示两种含义：分类前缀分隔符、扩展分隔符；即\'-\'是有一定语义的\n\n### 命名规则小点\n1. 对于样式不使用id选择器，样式只由class控制，id只给js使用；\n2. 样式中的选择器总是以分类开头，然后在里面用后代选择器\n3. 后代选择器命名：\n    - 不以单个字母+\'-\'为前缀，类选择器的命名长度大于等于2，禁止单个字母的类选择器出现（当后代选择器需要扩展时，如单字母.m-list .a会扩展成.a-bb，造成和大类冲突）\n    - 标签也可以是后代选择器\n    - 后代选择器的命名不需要完整表现结构树的层级，能短尽量短\n    - 后代选择器不要在页面布局（即全局）中使用，很大可能会造成污染\n    - （使用后代选择器不需要考虑命名是否已经被使用，因为只在当前模块和元件中生效，同样的样式名称可以在不同模块和元件中重复使用互不干扰，适合多人协作！）\n4. 相同语义的不同类命名\n    - 即从语义上来说都是某一种类型，但是样式或结构完全不一样，如.m-list、.m-list2都是列表，但是完全不一样\n    - 方法：直接加数字或字母区分\n5. 模块和元件的扩展类命名\n    - 当A、B、C类型相同且样式区别不大，就以出现率最高的作为基类，其他类做成扩展类\n    - 命名：+ \'-\' + 数字或字母，如.m-list -> .m-list-1；（注意和相同语义不同类的命名区别，这里中间有一个\'-\'，表示扩展）\n    - 基类自身可独立使用(如class="m-list")，扩展类必须基于基类使用(如class="m-list m-list-1")\n    - 如果扩展类表示不同状态，也可以类似这样命名：u-btn -> u-btn-hov、u-btn-sel\n    - 如果虽然两个同类型的模块很相似，但不希望存在依赖关系，不希望引入扩展类，还可以使用分组选择器，将相同样式写在一起，再分别设置样式\n6. 当模块和元件之间相互嵌套，且使用了相同的标签选择器或其他后代选择器，那里面的选择器就会被外面的选择器所影响；所以如果有嵌套，慎用标签选择器，必要时采用类选择器，且注意命名\n    - 如.m-list p 改为 .m-list .xxx 再改为 .m-list1 .list1xxx的方式降低污染可能性\n7. 选择器等级（a,b,c,d）\n    - a: 行内样式\n    - b：id选择器数量\n    - c：类、伪类、属性选择器数量\n    - d：标签选择器和伪元素选择器数量\n8. 在定义无边框样式时，使用 0 代替 none，如border: 0;\n\n### 代码格式\n1. 【保留个人意见！】NEC：单行写完一个选择器定义，即属性在一行写完；百度规定属性必须另起一行\n\n2. 省略值为0的单位\n\n3. NEC: 省略url引用中的引号，其他需要引号的地方使用单引号;  百度规定使用双引号不允许使用单引号\n    - background: url(bg.png); content: \'\';\n\n4. 根据属性的重要性按顺序书写：显示属性 -> 自身属性 -> 文本属性和其他修饰；如果属性之间存在关联不要隔开写，如height和line-height\n\n    （横向规则）\n\n    | 显示属性   | 自身属性  | 文本属性和其他修饰 |\n    | ---------- | --------- | ------------------ |\n    | display    | width     | font               |\n    | visibility | height    | text-align         |\n    | position   | margin    | text-decoration    |\n    | float      | padding   | vertical-align     |\n    | clear      | border    | white-space        |\n    | list-style | overflow  | color              |\n    | top        | min-width | background         |\n\n5. 私有属性在前，标准属性在后\n\n6. 多选择器规则声明时，每个选择器独占一行\n\n7. 规则声明左大括号前加一个空格，右大括号独占一行；属性的冒号后加一个空格\n\n8. 规则声明之间空行分开\n\n9. 缩进：NEC规定2空格，百度规定4空格，airbnb规定2空格\n\n10. 当数值为0~1之间时，省略整数部分的0\n\n\n\n### 典型错误\n\n- .class{}：不要以一个没有类别的样式作为主选择器，这样的选择器只能作为后代选择器使用，比如.m-xxx .class{}。\n- .m-xxx div{} ：不要以没有语义的标签作为选择器，这会造成大面积污染，除非你可以断定现在或将来你的这个选择器不会污染其他同类。\n- .g-xxx .class{} ：不要在页面布局中使用后代选择器，因为这个后代选择器可能会污染里面的元素。\n- .g-xxx .m-yyy{}.g-xxx .u-yyy{}：不要用布局去控制模块或元件，模块和元件应与布局分离独立。\n\n', '2018-11-27 03:56:09', NULL),
('f0d4a277e171dbab13d6f2c46cb781d2', 'this-is blog-name', '这是博客名', 'tech', '# asdfsdf\n* asdfsd\nafdasf\n\n9999999999\nfgh\nfgh\n\n\nsdfg\nsdfg\nsdfg\ndfg\ndfg\n\n\n\nfdg', '2018-11-12 09:46:56', NULL),
('f9aae67a54d24ef09baea9d2b3a8d70a', 'blog1', '博客一博客一博客一博客一博客一博客一', 'tech', '描述描述描述描述描述描述描述描述描述描述描述描述1111', '2018-11-03 07:11:13', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `blog_serial`
--

CREATE TABLE `blog_serial` (
  `id` int(11) NOT NULL COMMENT 'id',
  `blog_id` varchar(100) NOT NULL COMMENT '博客id',
  `serial_id` varchar(100) NOT NULL COMMENT '专栏id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客和专栏对应关系表';

--
-- 转存表中的数据 `blog_serial`
--

INSERT INTO `blog_serial` (`id`, `blog_id`, `serial_id`) VALUES
(1, '94f7af0f34671e13bcf0b919d17d113d', '915b4883d364248fccb19c1b64dc42f7'),
(2, '36ed5bb50f895d56b3640668289e9be5', '7ec51714e353b3de654aaf964f700dfb'),
(3, '513dd65b5fec5cf1b079b75f5980646d', 'a8d9337316955902b4bd376716678c87'),
(4, 'd144de3ad3f2682ea0da40f1b109d66b', '7ec51714e353b3de654aaf964f700dfb');

-- --------------------------------------------------------

--
-- 表的结构 `blog_tag`
--

CREATE TABLE `blog_tag` (
  `id` int(11) NOT NULL,
  `blog_id` varchar(100) NOT NULL COMMENT '博客id',
  `tag_id` varchar(100) NOT NULL COMMENT '标签id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客和标签对应关系表';

--
-- 转存表中的数据 `blog_tag`
--

INSERT INTO `blog_tag` (`id`, `blog_id`, `tag_id`) VALUES
(5, 'f9aae67a54d24ef09baea9d2b3a8d70a', '2ffac6313efd55305f64dfa353b636f9'),
(6, 'f9aae67a54d24ef09baea9d2b3a8d70a', '8d964a1af8c15ff1a30aa2e5945737d3'),
(7, '2856c99292388581748419c4bdf7a707', '8d964a1af8c15ff1a30aa2e5945737d3'),
(8, '5d4856736137f0c4f3741c3dc4f9dde8', '2ffac6313efd55305f64dfa353b636f9'),
(9, '25d24db7c5c3e1255f275f4b35849e7e', '2ffac6313efd55305f64dfa353b636f9'),
(10, '8021739cde30505ae89d36b6169075e0', '8d964a1af8c15ff1a30aa2e5945737d3'),
(11, '8021739cde30505ae89d36b6169075e0', '2ffac6313efd55305f64dfa353b636f9'),
(12, '8021739cde30505ae89d36b6169075e0', 'a183799c1f77519dd0292a6a03494cdf'),
(13, '41886f56da8e81173888aa5f7853fbb3', '8d964a1af8c15ff1a30aa2e5945737d3'),
(14, '41886f56da8e81173888aa5f7853fbb3', '2ffac6313efd55305f64dfa353b636f9'),
(15, '41886f56da8e81173888aa5f7853fbb3', 'a183799c1f77519dd0292a6a03494cdf'),
(16, '3c420d427ce4970447ae322e3786ab6d', '2ffac6313efd55305f64dfa353b636f9'),
(17, '3c420d427ce4970447ae322e3786ab6d', 'a183799c1f77519dd0292a6a03494cdf'),
(23, 'f0d4a277e171dbab13d6f2c46cb781d2', '2ffac6313efd55305f64dfa353b636f9'),
(24, 'f0d4a277e171dbab13d6f2c46cb781d2', '8d964a1af8c15ff1a30aa2e5945737d3'),
(25, 'f0d4a277e171dbab13d6f2c46cb781d2', 'a183799c1f77519dd0292a6a03494cdf'),
(36, 'dc536c324ca8a6ee6cc291be0ddac29a', '87d42825fade6c64b114db3ab72b272d'),
(37, 'dc536c324ca8a6ee6cc291be0ddac29a', 'd1e8fbde3fbd91045f19880150b39a2a');

-- --------------------------------------------------------

--
-- 表的结构 `draft`
--

CREATE TABLE `draft` (
  `id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `opt_log`
--

CREATE TABLE `opt_log` (
  `id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='操作日志表';

-- --------------------------------------------------------

--
-- 表的结构 `s_version`
--

CREATE TABLE `s_version` (
  `id` int(100) NOT NULL,
  `version` varchar(100) NOT NULL COMMENT '版本号',
  `description` varchar(200) NOT NULL COMMENT '描述',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `s_version`
--

INSERT INTO `s_version` (`id`, `version`, `description`, `create_time`, `update_time`) VALUES
(1, '0.0.1', '基本功能。博客增删改查。标签增删改查。专栏增删改查。', '2018-11-27 03:10:56', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `serial`
--

CREATE TABLE `serial` (
  `id` varchar(100) NOT NULL COMMENT '专栏id',
  `name` varchar(100) NOT NULL COMMENT '专栏英文名',
  `title` varchar(20) NOT NULL COMMENT '专栏标题',
  `description` varchar(200) NOT NULL COMMENT '描述',
  `create_time` datetime NOT NULL COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='专栏';

--
-- 转存表中的数据 `serial`
--

INSERT INTO `serial` (`id`, `name`, `title`, `description`, `create_time`) VALUES
('429fe6cb719d4b13957948a99555d636', 'test-add-serial-edit', '测试专栏123', '描述edit', '2018-11-26 02:52:39'),
('7ec51714e353b3de654aaf964f700dfb', 'serial3333', '专栏3', '专栏描述专栏描述专栏描述专栏描述专栏描述3333', '2018-11-03 07:14:01'),
('915b4883d364248fccb19c1b64dc42f7', 'serial1', '专栏1', '专栏描述专栏描述专栏描述专栏描述专栏描述', '2018-11-03 07:13:30'),
('a8d9337316955902b4bd376716678c87', 'serial222', '专栏2', '专栏描述专栏描述专栏描述专栏描述专栏描述2222222', '2018-11-03 07:13:48');

-- --------------------------------------------------------

--
-- 表的结构 `system`
--

CREATE TABLE `system` (
  `id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统信息表';

-- --------------------------------------------------------

--
-- 表的结构 `tag`
--

CREATE TABLE `tag` (
  `id` varchar(100) NOT NULL COMMENT '标签id',
  `name` varchar(100) NOT NULL COMMENT '标签英文名',
  `title` varchar(20) NOT NULL COMMENT '标签中文名',
  `description` varchar(200) NOT NULL COMMENT '标签描述',
  `create_time` datetime NOT NULL COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tag`
--

INSERT INTO `tag` (`id`, `name`, `title`, `description`, `create_time`) VALUES
('2ffac6313efd55305f64dfa353b636f9', 'tag1', '标签一', '描述描述描述描述描述描述描述描述描述描述描述描述', '2018-11-03 07:04:28'),
('87d42825fade6c64b114db3ab72b272d', 'frontend', '前端', '前端相关', '2018-11-27 03:50:10'),
('8d964a1af8c15ff1a30aa2e5945737d3', 'tag2', '标签二', '描述描述描述描述描述描述描述描述描述描述描述描述222', '2018-11-03 07:04:52'),
('a183799c1f77519dd0292a6a03494cdf', 'tag3', '标签三', '描述描述描述描述描述描述描述描述描述描述描述描述3333', '2018-11-03 07:05:02'),
('cd1bd4fd77e3da9055e7d1e8f751ee48', 'test-add-tag-edit', '测试标签-edit2', 'asdf-edit', '2018-11-26 02:54:23'),
('d1e8fbde3fbd91045f19880150b39a2a', 'css', 'css', 'css相关', '2018-11-27 03:54:08');

-- --------------------------------------------------------

--
-- 表的结构 `view_log`
--

CREATE TABLE `view_log` (
  `id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='客户端访问日志表';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `account` (`account`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `blog_serial`
--
ALTER TABLE `blog_serial`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blog_id` (`blog_id`);

--
-- Indexes for table `blog_tag`
--
ALTER TABLE `blog_tag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `draft`
--
ALTER TABLE `draft`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `opt_log`
--
ALTER TABLE `opt_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `s_version`
--
ALTER TABLE `s_version`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `version` (`version`);

--
-- Indexes for table `serial`
--
ALTER TABLE `serial`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `system`
--
ALTER TABLE `system`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `view_log`
--
ALTER TABLE `view_log`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id', AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `blog_serial`
--
ALTER TABLE `blog_serial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `blog_tag`
--
ALTER TABLE `blog_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- 使用表AUTO_INCREMENT `s_version`
--
ALTER TABLE `s_version`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
