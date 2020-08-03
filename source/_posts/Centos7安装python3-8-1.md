---
title: Centos7安装python3.8.1
tags:
  - centos7
  - linux
  - python
  - 环境配置
categories:
  - 日常学习
abbrlink: 2f518ecf
date: 2020-05-27 19:08:26
---

## 写在前面

最近又在学习CentOS，需要安装一下python，但是CentOS7上默认自带了Python 2，没有Python 3。所以就决定安装一个，这里记录一下。

## 查看 Python 版本号

如果Linux 上安装有 Python （一般为默认安装），只需要输入简单的命令，就可以查看 Python 的版本号：

<!-- more -->

```bash
$ python -V
Python 2.7.5
```

或者是：

```bash
$ python --version
Python 2.7.5
```

可以看出，系统自带的 Python 版本是 2.7.5。

## 安装Python依存关系

我们将从源代码安装Python，因此请安装Python安装所需的软件包：

```bash
$ sudo yum -y groupinstall "Development Tools"
$ sudo yum -y install openssl-devel bzip2-devel libffi-devel
```

确认gcc可用：

```bash
$ gcc --version
gcc (GCC) 4.8.5 20150623 (Red Hat 4.8.5-39)
```

## 下载Python 3.8.1软件包并解压

现在下载Python 3.8.1版本的软件包，在命令行中可运行以下命令：

```bash
$ sudo yum -y install wget
$ wget https://www.python.org/ftp/python/3.8.1/Python-3.8.1.tgz
```

想要下载其他版本可以到[python下载地址]( https://www.python.org/downloads/ )下载其他版本。

解压缩包：

```bash
$ tar xvf Python-3.8.1.tgz
```

进入解压缩后的目录:

```bash
$ cd Python-3.8*/
```

## 创建安装目录

```bash
$ mkdir /usr/local/python3
```

## 编译并安装

```bash
$ ./configure --prefix=/usr/local/python3
$ make && make install
```

## 建立软链接

```bash
$ ln -s /usr/local/python3/bin/python3 /usr/local/bin/python3
$ ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip3
```

## 验证是否成功

```bash
$ python3 -V
Python 3.8.1
$ pip3 -V
pip 19.2.3 from /usr/local/python3/lib/python3.8/site-packages/pip (python 3.8)
```

## 参考

[Centos7安装Python3.7](https://www.cnblogs.com/anxminise/p/9650206.html)

[在CentOS 7/CentOS 8发行版上安装Python 3.8.1版本的方法](https://ywnz.com/linux/6297.html)
