---
title: Debian&Ubuntu设置静态ip
tags:
  - Debian
  - Ubuntu
  - Linux
  - 静态IP
categories:
  - 系统设置
abbrlink: 8c930c05
date: 2020-07-07 01:00:36
---

## 写在前面

最近开了几个虚拟机做实验，通过`ssh`连接上去，为了避免IP更换带来麻烦，所以设置一下静态IP,这里记录一下，方便查阅。

## 环境

+ Debian10系统
+ NAT模式

<!-- more -->

## 配置静态IP

### 备份原有配置文件

```bash
cp /etc/network/interfaces /etc/network/interfacesbak #备份原有配置文件
```

### 配置静态IP

```bash
vim  /etc/network/interfaces #编辑网卡配置文件
```

将内容修改为以下内容：

```bash
# The loopback network interface
auto lo
#iface lo inet loopback

# The primary network interface
allow-hotplug ens33
#iface ens33 inet dhcp

auto ens33
iface ens33 inet static
address 192.168.162.136
gateway 192.168.162.2
netmask 255.255.255.0
```

## 配置DNS服务

Debian的DNS配置保存在文件`/etc/resolv.conf`里面。

```bash
vim /etc/resolv.conf
```

将以下内容填入：

```bash
nameserver 8.8.8.8
nameserver 114.114.114.114
```

## 重启网络

```bash
/etc/init.d/networking restart
```


