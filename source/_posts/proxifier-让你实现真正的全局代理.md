---
title: proxifier-让你实现真正的全局代理
tags:
  - proxifier
  - 代理
  - 全局代理
  - 游戏加速
categories:
  - 软件分享
abbrlink: '64808312'
date: 2020-05-17 14:39:43
---

## 前言

目前很多人都使用上了Shadowsocks，V2ray，Trojan这类的socks5代理来实现科学上网，虽然这些代理通常有所谓的*全局代理*模式，但是我们在日常使用中就会发现，我们并不能利用这些代理来打游戏，从GitHub上clone项目依然慢的离谱，这是因为由于socks5代理模式原理的限制，使得这些socks5代理的*全局模式*并不能真正意义上实现全局代理，只能使网页浏览器，邮件服务器，文件传输这些服务实现代理。下面通过OSI模型来解释原理。

<!-- more -->

![](http://figure.cruisetian.top/img/7541336-b87f3c6f5235b56d.png)

因为上面提到的这些服务在网络层级中处于最上层应用层，上面提到的这些socks5类型的代理则处于第五层会话层，所以可以代理上边层级的数据，而游戏数据是直接通过传输层的协议TCP和UDP进行通讯的，所以不经过会话层也不需要表示层来解释，所以正常情况下你就算开了这些socks5代理的*全局模式*，也不能加速游戏因为代理不了跑在传输层的游戏通讯数据，而借助proxifier这类工具则可以实现真正意义上的全局代理。

## Proxifier介绍

Proxifier是一款功能非常强大的代理客户端，支持Windows XP/Vista/Win7/Win10 和 MacOS，支持http/https、socks4/5、TCP、UDP等协议，可以指定端口，指定IP，指定域名、指定程序、指定用户名密码授权等运行模式，兼容性非常好，有点类似SOCKSCAP。

## 安装

### Proxifier下载

官网发布多个版本，需要付费使用，同时也提供了 31 天的免费试用，其中[便携版](https://www.baidu.com/s?wd=便携版&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)不需要安装，直接双击运行，安装版则直接安装即可。<br>
  Windows便携版：[官网地址](https://www.proxifier.com/distr/ProxifierPE.zip)<br>
  Windows安装版：[官网地址](https://www.proxifier.com/distr/ProxifierSetup.exe)<br>
  Mac版：[官网地址](https://www.proxifier.com/distr/ProxifierMac.zip)

但由于Proxifier 官网下载地址国内无法访问，且是商业收费版，推荐下面的链接中下载汉化破解版
[Proxifier汉化注册版](https://cruisetian.lanzous.com/icpyx6f)

### Proxifier安装

将下载下来的安装包解压以后，双击**setup.exe**，根据提示一步步安装，这里不再赘述。

## Proxifier设置

### 代理服务器配置

打开proxifier以后，点击菜单栏的**配置文件->代理服务器**,点击**添加**

![](http://figure.cruisetian.top/img/Snipaste_2020-05-17_13-59-07.png)

然后填入你的代理服务器地址和端口，如果本地有ss,v2ray,trojan服务的话可以在你对应的客户端的设置中找到本地监听地址和监听端口，填入即可，协议我选择socks5协议

![](http://figure.cruisetian.top/img/Snipaste_2020-05-17_14-00-56.png)

点击检查，查看是否可用，如果如下显示“代理可在proxifier中使用”则说明设置正确

![](http://figure.cruisetian.top/img/Snipaste_2020-05-17_14-05-51.png)

然后点击**确定**，返回到设置界面，点击**确定**即可，接着会弹出一个窗口，提示你是否要把这个代理服务器作为默认代理，点击**是**

![](http://figure.cruisetian.top/img/Snipaste_2020-05-17_14-07-35.png)

没什么问题的话，Proxifier 就可以正常使用了，它会将本机所有的联网全部通过配置的代理服务器发送和接收，此外你还会在程序主界面看到不少的日志信息

### 代理规则设置

Proxifier 还可以自定义规则，进行个性化配置，点击菜单栏的**配置文件->代理规则**,点击添加即可增加新的规则![](http://figure.cruisetian.top/img/Snipaste_2020-05-17_14-16-41.png)

名称随意，应用程序那一栏选择**浏览**即可选择你想要自定义设置的应用，在最后的动作那一栏选择直连或是走代理，根据个人情况进行选择，最后点击确定即可生效

![](http://figure.cruisetian.top/img/Snipaste_2020-05-17_14-18-00.png)

## 后记

proxifier更多的个性化配置就根据自己的情况进行配置就好，这里就不再演示，比较每个人的需求不同。

文中示范所用的汉化破解版下载地址：<https://cruisetian.lanzous.com/icpyx6f>
