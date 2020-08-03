---
title: Docker设置HTTP/HTTPS代理
tags:
  - Docker
  - proxy
  - 代理
categories:
  - 日常学习
abbrlink: 4315e63f
date: 2020-05-15 00:10:34
---

## 写在前面

最近刚刚开始学习docker，抽了两天的空余时间了解了一下docker，今天正式在我的电脑上安装并使用docker，因为众所周知的原因，Docker在国内的使用比较艰难，虽然很多组织在国内提供了`mirror`，可以拉取各种官方镜像,但是大量的组织或个人的镜像都在docker hub，这一部分并没有被镜像同步。所以就需要给docker设置代理，帮助我们更好的使用docker。

<!-- more -->

## Docker简介

Docker容器与虚拟机类似，但原理上，容器是将操作系统层虚拟化，虚拟机则是虚拟化硬件，因此容器更具有便携性、高效地利用服务器。 容器更多的用于表示 软件的一个标准化单元。由于容器的标准化，因此它可以无视基础设施（Infrastructure）的差异，部署到任何一个地方。另外，Docker也为容器提供更强的业界的隔离兼容。

## 前提条件

+ 拥有一个HTTP代理
+ Linux发行版的服务管理器使用的是systemd
+ 我的系统是Ubuntu18.04，docker版本是19.03，能够正常设置

## HTTP/HTTPS proxy

好了从这里开始就开始配置代理了。

### 为docker服务创建docker.service.d 目录：

```bash
sudo mkdir -p /etc/systemd/system/docker.service.d
```

###  创建HTTP 或者HTTPS 代理文件并修改:

+ HTTP:

```bash
vim /etc/systemd/system/docker.service.d/http-proxy.conf
```

然后按 'i'切换到输入模式，将以下配置填入，其中代理IP和端口根据你自己的情况来定。

```bash
[Service]
Environment="HTTP_PROXY=http://proxy.example.com:80/"
```

+ HTTPS:

```bash
vim /etc/systemd/system/docker.service.d/https-proxy.conf
```

同样的，按 'i'切换到输入模式，将以下配置填入，其中代理IP和端口根据你自己的情况来定。

```bash
[Service]
Environment="HTTPS_PROXY=https://proxy.example.com:443/"
```

### 局域网或者国内的registry不使用代理

如果有局域网或者国内的registry，我们还需要使用 NO_PROXY 变量声明一下，比如你可以能国内的daocloud.io放有镜像:

+ HTTP:

```bash
[Service]
Environment="HTTP_PROXY=http://proxy.example.com:80/" "NO_PROXY=localhost,127.0.0.1,daocloud.io"
```

+ HTTPS:

```BASH
[Service]
Environment="HTTPS_PROXY=https://proxy.example.com:443/" "NO_PROXY=localhost,127.0.0.1,daocloud.io"
```

### 完成修改后刷新systemd配置

```bash
sudo systemctl daemon-reload
```

### 重启Docker

```bash
sudo systemctl restart docker
```

### 验证配置是否已加载

```bash
systemctl show --property=Environment docker
```

输出应类似于以下语句：

```bash
Environment=HTTP_PROXY=http://proxy.example.com:80/
or
Environment=HTTPS_PROXY=https://proxy.example.com:443/
```

好了，现在就可以愉快的使用Docker了。

## 参考文档：

<https://docs.docker.com/config/daemon/systemd/>
