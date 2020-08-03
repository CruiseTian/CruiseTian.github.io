---
title: ClashR使用，让你的chrome起飞
tags:
  - clash
  - clashR
  - 代理
  - 机场
  - SwicthyOmega
categories:
  - 软件分享
abbrlink: f5257d2a
date: 2020-05-13 09:53:11
---

## 获得代理节点

首先找到一个机场，这里可以用这个（[优云666](https://youyun666.com/auth/register?code=g4oY)），可以白嫖几个月，流量基本够用。注册账号，登录以后可以先点每日签到，可以随机得到1~5G流量

![](http://figure.cruisetian.top/img/Snipaste_2020-05-11_19-53-01.png)

然后下拉，到下面这个页面，点击**复制ClashR订阅**，留着一会备用。

<!-- more -->

![](http://figure.cruisetian.top/img/198274-91.png)



## 配置ClashR

先到它的[Github](https://github.com/frainzy1477/clashrdev/releases)下载所需的版本的软件，但是GitHub下载可能比较慢，所以我这里也提供了快速下载链接，可以到文末找到并下载压缩包。解压压缩包，然后运行**Clash for Windows.exe**,选择**Profiles**.

![](http://figure.cruisetian.top/img/Snipaste_2020-05-11_20-03-04.png)

在**Download**左边的框里粘贴刚刚复制的链接，然后点击**Download**, 等待它下载。

![](http://figure.cruisetian.top/img/Snipaste_2020-05-11_20-09-12.png)

然后在**Proxies**界面选择上边的**Global**或者**Rule**(Global是全局代理，Rule是国外网站走代理，国内直接连接)

![](http://figure.cruisetian.top/img/Snipaste_2020-05-11_20-13-22.png)

然后在**General**中把**System Proxy**打开

![](http://figure.cruisetian.top/img/Snipaste_2020-05-11_20-14-58.png)



## 配置浏览器端的Switchy Omega插件

先在Chrome浏览器里安装[Switchy Omega插件](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?utm_source=chrome-ntp-icon),然后进入设置界面，进行配置

### 配置代理服务器

选择**Proxy**,按照下图中的红框中的内容填进去

![](http://figure.cruisetian.top/img/Snipaste_2020-05-11_20-20-46.png)

然后点击**应用选项**

![](http://figure.cruisetian.top/img/Snipaste_2020-05-11_20-22-01.png)

### 配置自动切换规则

![](http://figure.cruisetian.top/img/Snipaste_2020-05-11_20-24-04.png)

规则列表网址是这个：https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt

然后再点击**应用选项**即可

最后记得把这个插件启用，并选中**AutoProxy**或者**Proxy**

## 相关链接

ClashR的GitHub链接：<https://github.com/frainzy1477/clashrdev/releases>

我给的ClashR快速下载链接：<https://cruisetian.lanzous.com/icih0he>
