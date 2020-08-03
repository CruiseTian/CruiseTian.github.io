---
title: 为npm设置代理
tags:
  - npm
  - proxy
  - 代理
categories:
  - 系统设置
abbrlink: 603b46
date: 2020-05-12 16:23:22
---

## 写在前面

**npm**（全称 Node Package Manager，即“node包管理器”）是[Node.js](https://zh.wikipedia.org/wiki/Node.js)默认的、用[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)编写的[软件包管理系统](https://zh.wikipedia.org/wiki/軟體套件管理系統)。

由于我们的开发环境由于安全因素在访问一些网站时需要使用代理，其中就包括npm的repositories网站，所以就需要修改npm的配置来加入代理。

下面简要介绍下npm的配置以及如何设置代理。

<!-- more -->

## 为npm设置代理

### 设置http代理

```
# 假设本地代理端口为8080
npm config set proxy "http://localhost:8080"
npm config set https-proxy "http://localhost:8080"
```

如果代理需要认证的话可以这样来设置。

```
# 有用户密码的代理
npm config set proxy "http://username:password@localhost:8080"
npm confit set https-proxy "http://username:password@localhost:8080"
```

### 查看代理

```
npm config get #或者使用下面这个，二者选一个
npm config list
```

### socks5 代理

npm 不支持 socks 代理，但是我们可以用一个工具将 http 代理转成 socks 代理，然后将 npm 代理地址设置到这个工具的地址。

```
# 假设本地socks5代理端口为8081
# 首先安装转换工具
npm install -g http-proxy-to-socks
# 然后使用这个工具监听8080端口,支持http代理，然后所有8080的http代理数据都将转换成socks的代理数据发送到8081上
hpts -s localhost:8081 -p 8080
# 最后设置npm代理为8080
npm config set proxy "http://localhost:8080"
npm config set https-proxy "http://localhost:8080"
```

相当于又加了一个中间层，将 http 转成 socks。

## 取消代理

```
npm config delete proxy
npm config delete https-proxy
```

## 后记

一般设置完代理的npm下载软件包就很快啦，但是还是跟代理的速度有关系，所以要选择质量较好的代理。
