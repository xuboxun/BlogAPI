-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2018-11-13 20:44:41
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
(1, 'test', 'test@qq.com', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-13 00:00:00', NULL);

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
(25, 'f0d4a277e171dbab13d6f2c46cb781d2', 'a183799c1f77519dd0292a6a03494cdf');

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
('8d964a1af8c15ff1a30aa2e5945737d3', 'tag2', '标签二', '描述描述描述描述描述描述描述描述描述描述描述描述222', '2018-11-03 07:04:52'),
('a183799c1f77519dd0292a6a03494cdf', 'tag3', '标签三', '描述描述描述描述描述描述描述描述描述描述描述描述3333', '2018-11-03 07:05:02');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
