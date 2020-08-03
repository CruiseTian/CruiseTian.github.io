---
title: 给你的hexo博客绑定域名
tags:
  - hexo
  - 博客
  - 域名绑定
categories:
  - 日常学习
abbrlink: 26a7e178
date: 2020-05-12 16:48:32
---


## 前言

最近比较闲，利用hexo在GitHub上搭建了一个静态博客，那么既然是个人博客，当然要上自己的域名了，这样才能更~~有个人特色~~有逼格。

## 搭建Hexo博客并推送到github页面

这一步就不再多讲，大家可以自己去网上找相关教程，有很多。

这里给几个推荐链接：[GitHub+Hexo 搭建个人网站详细教程](https://zhuanlan.zhihu.com/p/26625249), [使用 Hexo+GitHub 搭建个人免费博客教程（小白向）](https://zhuanlan.zhihu.com/p/60578464)

差不多够用了。

<!-- more -->

## 注册域名

可以去阿里云，腾讯云，狗爹，namesilo去购买一个域名，也可以到 [Freenom]([https://www.freenom.com](https://www.freenom.com/zh/index.html?lang=zh)) 去申请一个免费的域名。

## 解析域名

到你注册域名的地方，增加给你的域名做DNS解析，增加一条CNAME解析，指向你的博客，这里我以cloudflare为例：

![](http://figure.cruisetian.top/img/6.png)

## 创建CNAME文件

在hexo项目下 source 文件下创建CNAME 文件（没有后缀名的），在里面写上购买的域名，如

![](http://figure.cruisetian.top/img/3.png)

## 到GitHub中填入自己的域名

到你创建的页面repo中，找到setting→options，往下翻，找到Custom domain，然后在其中填入你解析的域名，点击Save保存。如，

![](http://figure.cruisetian.top/img/4.png)

![](http://figure.cruisetian.top/img/5.png)

然后在浏览器的地址栏输入自己的域名，就可以访问啦。
