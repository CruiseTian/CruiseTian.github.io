---
title: goindex-在国内使用你的谷歌网盘
tags:
  - goindex
  - 谷歌云盘
  - Google Drive
  - 国内使用
categories:
  - 技术分享
abbrlink: 1d96ecd4
date: 2020-06-13 14:01:06
---

## 写在前面

谷歌云盘是一款极其好用的网盘，使用体验吊打百度网盘，不限速，而且甚至还可以获得无限空间，至于如何获得无限空间，这里就不说明了，有兴趣的可以自行谷歌。但是这么好用的一款网盘，由于大家都知道的原因，在国内并不能使用，只能科学上网使用，有时候需要下载文件时就需要浪费宝贵的代理流量，毕竟都是钱啊，所以今天就在这里分享一下通过Cloudflare来实现在国内访问并下载你谷歌网盘中的文件，不用消耗代理流量。

<!-- more -->

## 注册Cloudflare账户

Cloudflare是一个知名的提供免费的CDN服务和域名解析服务的服务商

首先注册一个Cloudflare账户，到下面这个地址：[Cloudflare注册](https://dash.cloudflare.com/sign-up).

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_19-34-42.png)

注册完以后登录，可能会提示你添加站点，点击右上角你的账户标识然后点击**账户主页**就好了，在这个页面可以验证一下邮箱

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_19-38-30.png)

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_19-40-56.png)

验证完以后重新回到主页，点击右边的**Workers**,然后定义一个自己的名字，后来会显示在你的访问你的goindex服务的域名中，然后点击**Set Up**

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_19-44-52.png)

进入到下一个界面，点击**Continue with Free**

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_19-48-11.png)

然后接下来可以开始创建Workers，先做一些准备工作

## 获取Workers代码

首先进入下面这个网址：[goindex code builder](https://gdindex-code-builder.glitch.me/),(进入可能有点慢，稍微等一会)

进入以后按照步骤进行即可，点击**Click me**

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_19-57-18.png)

之后会跳转到登录谷歌账号的页面，选择你注册Cloudflare账户的账号登录，之后的一些权限点**允许**即可，这时候会得到一行代码，点击右边复制按钮复制代码

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_19-59-45.png)

然后返回刚刚的网址将复制的代码粘贴进入**Authorization Code**框，然后接下来登录谷歌云盘，选择你想要部署的文件夹，点进去，此时浏览器的地址栏应该是这个样子的

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_20-04-35.png)

然后将浏览器的地址栏**folders**后面的部分复制下来，粘贴进**Default Root ID**框内

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_20-06-46.png)

然后接下来的配置就自己选择配置一下就好了，填完以后点击**Get Code**按钮

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_20-07-51.png)

这时候你会得到一堆代码，点击**Copy the code to clipboard**即可。

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_20-10-54.png)

## 创建Workers

回到Cloudflare页面，点击**Create a Worker**

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_20-12-52.png)

将原来**Script**框内的代码删除，然后把刚刚复制的代码粘贴进去，其中代码最开头的`self.props`中的内容可以修改，根据自己的需求进行修改即可

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_20-16-39.png)

然后可以修改一下workers的名字，一般默认的比较长，不太好记

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_20-18-06.png)

然后点击右侧的**Preview**预览一下生成的界面，下面展示的网址就是你之后要不翻墙访问你的谷歌云盘要输入的网址，可以复制一下

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_20-23-40.png)

如果预览没有问题就点击底部的**Save and Deploy**部署Workers即可

![](http://figure.cruisetian.top/img/Snipaste_2020-06-12_20-20-51.png)

之后就可以在浏览器输入刚刚复制的地址进行访问了。


