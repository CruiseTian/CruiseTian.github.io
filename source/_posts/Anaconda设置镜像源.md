---
title: Anaconda设置镜像源
tags:
  - Anaconda
  - 镜像源
categories:
  - 日常学习
abbrlink: c3fd64c3
date: 2020-07-07 12:56:58
---

## 前言

在使用安装`conda` 安装某些包会出现慢或安装失败问题，所以可以修改镜像源为国内镜像源来解决这个问题，这里记录一下。主要有两个方面的内容：

+ 显示所有channel
+ 更换channel
+ 移除镜像源

<!-- more -->

## 显示所有channel

首先，`conda config --show`能够显示出所有`conda`的config信息。
如果我们只想看channels的信息，输入`conda config --show channels`即可

## 添加镜像源

这里添加的是清华源

```bash
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes
```

其中`conda config --set show_channel_urls yes`的意思是从channel中安装包时显示channel的url，这样就可以知道包的安装来源了。

执行`conda config --show channels`，得到的结果如下：

```bash
channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - defaults
```

## 移除镜像源

使用`conda config --remove channels url地址`可以删除对应的镜像，如

```bash
conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
```

就可以删除刚刚添加的清华镜像源，这时执行`conda config --show channels`，得到的结果如下：

```bash
channels:
  - defaults
```

## 一些其他的conda指令

```bash
conda install <包名> #安装指定包
conda remove <包名>  #移除指定包
conda update <包名>  #更新指定包

conda update conda #更新conda,当提示你确认更新时，键入y继续。
#更新conda后，继续进行Anaconda更新
conda update anaconda #出现提示时，键入y继续。
```


