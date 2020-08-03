---
title: 为git配置代理
tags:
  - git
  - proxy
  - github
categories:
  - 系统设置
abbrlink: 30b83ef0
date: 2020-05-12 13:30:20
---

## 写在前面

在国内，github虽然没有被墙，但是速度极慢，有时候想要clone一份代码要花很长时间，所以就考虑给git设置一个代理，这样能使连接的速度更快

通常我们 clone 代码时可以选择两种方式

```bash
//方式一：HTTP
https://github.com/git/git.git
//方式二：SSH
git@github.com:git/git.git
```

两种方式设置代理的方法是不同的，下面一一介绍。

<!-- more -->

## 设置Git HTTP代理

如果你手上的代理是 socks5 代理，如各平台的 Shadowsocks 客户端，trojan，v2ray等都提供一个本地的 socks5 代理，那么你可以这样设置，让 Git 通过 HTTP 链接 clone 代码时走 socks5 代理

```
//通过 http 链接 clone 代码时走 http 代理
git config --global http.proxy "socks5://127.0.0.1:1080"
//通过 https 链接 clone 代码时走 http 代理
git config --global https.proxy "socks5://127.0.0.1:1080"
```

设置完成后，可以 clone 一份代码试一下有没有效果。如果没有设置错误的话，代码clone的速度应该会提高很多。

这些设置最终会保存在用户目录下的 `.gitconfig` 文件中，打开这个文件可以看到类似的几行配置

```
[http]
    proxy = socks5://127.0.0.1:1080
[https]
    proxy = socks5://127.0.0.1:1080
```

如果端口有变动也可以直接在这里修改。

## 设置 Git SSH 代理

还有一种情况，我们通过 SSH 方法 clone 代码，提交代码，因为这样不用输入密码，通常我们会在自己的常用电脑上这么做。上面设置的 HTTP 代理对这种方式 clone 代码是没有影响的，也就是并不会加速，SSH 的代理需要单独设置，其实这个跟 Git 的关系已经不是很大，我们需要改的，是SSH 的配置。在用户目录下建立如下文件 ~/.ssh/config，对 GitHub 的域名做单独的处理

```
# 这里必须是 github.com，因为这个跟我们 clone 代码时的链接有关
Host github.com
   # 如果用默认端口，这里是 github.com，如果想用443端口，这里就是 ssh.github.com 详见 https://help.github.com/articles/using-ssh-over-the-https-port/
   HostName github.com
   User git
   # 如果是 HTTP 代理，把下面这行取消注释，并把 proxyport 改成自己的 http 代理的端口
   # ProxyCommand socat - PROXY:127.0.0.1:%h:%p,proxyport=1080
   # 如果是 socks5 代理，则把下面这行取消注释，并把 6666 改成自己 socks5 代理的端口
   # ProxyCommand nc -v -x 127.0.0.1:1080 %h %p
```

根据代码中的注释，设置自己的代理。

经过上面的设置，现在不管是用什么方式 clone 代码，都会走代理了，这里还是强调一下，代理要速度快才会有加速效果，如果代理一般或者很慢，可能还不如不走代理。
