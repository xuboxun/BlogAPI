-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2018-10-10 20:43:24
-- 服务器版本： 5.7.23-0ubuntu0.16.04.1
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

-- --------------------------------------------------------

--
-- 表的结构 `blog`
--

CREATE TABLE `blog` (
  `id` varchar(100) NOT NULL COMMENT '博客id',
  `name` varchar(100) NOT NULL COMMENT '链接英文名称',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `content` text NOT NULL COMMENT '内容',
  `create_time` datetime NOT NULL COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客列表';

-- --------------------------------------------------------

--
-- 表的结构 `blog_serial`
--

CREATE TABLE `blog_serial` (
  `id` varchar(100) NOT NULL COMMENT 'id',
  `blog_id` varchar(100) NOT NULL COMMENT '博客id',
  `serial_id` varchar(100) NOT NULL COMMENT '专栏id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客和专栏对应关系表';

-- --------------------------------------------------------

--
-- 表的结构 `blog_tag`
--

CREATE TABLE `blog_tag` (
  `id` int(11) NOT NULL,
  `blog_id` varchar(100) NOT NULL COMMENT '博客id',
  `tag_id` varchar(100) NOT NULL COMMENT '标签id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客和标签对应关系表';

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
-- 使用表AUTO_INCREMENT `blog_tag`
--
ALTER TABLE `blog_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
