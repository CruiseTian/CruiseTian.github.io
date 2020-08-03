---
title: 'python虚拟环境再探索(virtualenv,virtualenvwrapper)'
tags:
  - python
  - virtuanenv
  - virtuanenvwrapper
  - 虚拟环境
categories:
  - 日常学习
abbrlink: f9c8ed6
date: 2020-07-16 00:59:44
---


## 前言

最近在本地做实验的时候，要启动一个服务，需要配置一个虚拟环境，防止本地环境的混乱，由于没有安装`conda`，所以就采用`virtualenv`和`virtualenvwrapper`来尝试搭建虚拟环境，这里记录一下过程，方便查阅。

## 环境

+ Debian10系统
+ python 3.7.3
+ pip3 18.1

<!-- more -->

## 使用virtuanenv搭建虚拟环境

### 安装

```bash
pip3 install virtualenv
```

### 创建虚拟环境

使用`virtualenv`命令创建虚拟环境：`virtualenv [虚拟环境名]`

```bash
mkdir myproject #创建虚拟环境仓库
cd myproject
virtualenv --no-site-packages venv
```

命令`virtualenv`就可以创建一个独立的Python运行环境，再加上参数`--no-site-packages`，可以让已经安装到系统Python环境中的所有第三方包都不会复制过来，这样，就得到了一个不带任何第三方包的“干净”的Python运行环境。

### 激活虚拟环境

可以用`source`进入该环境，执行以下命令：

```bash
source venv/bin/activate
```

没有问题的话就可以看到命令提示符变了，有个`(venv)`前缀，表示当前环境是一个名为`venv`的Python环境。

### 退出虚拟环境

退出虚拟环境

```bash
deactivate
```

如果想要删除虚拟环境，只需删除虚拟环境目录即可。

## 使用virtualenvwrapper

`virtualenvwrapper`是一种`virtualenv`虚拟环境的管理工具。

### 安装

```bash
pip3 install virtualenvwrapper
```

### 配置

首先查找配置脚本的位置，因为环境里python的安装目录不同，执行以下命令：

```bash
find / -name virtualenvwrapper.sh
```

设置环境变量，在`.bashrc`或`.profile`文件中加入三行代码：

```bash
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh # 替换为上一步找到的path
```

参数说明：

- WORKON_HOME：表示存放虚拟环境的位置
- PROJECT_HOME：表示项目工作目录的位置（使用`mkproject`命令时会用到）
- source：待载入Shell文件的路径

编辑完后执行`source ~/.bashrc`重新加载配置文件即可正常使用命令。顺带一提，配置文件重新加载后会自动创建`.virtualenvs`文件夹，却不会自动创建`Devel`文件夹，所以还是需要使用`mkdir $HOME/Devel`手动创建文件夹。

### 虚拟环境管理(常用命令)

#### **创建虚拟环境**

```bash
mkvirtualenv [-a project_path] [-i package] [-r requirements_file] [virtualenv options] ENVNAME
```

参数说明：

- -i：指定一个或多个包
- -a：指定一个项目目录，用于将该虚拟环境绑定至一个现有项目
- -r：指定一个requirements文件，一般是由`pip freeze`所生成的，里面包括了需要用到的所有包
- virtualenv options：参数将直接传递给`virtualenv`，详情参阅[virtualenv官方文档](https://virtualenv.pypa.io/en/stable/)

例如

```bash
mkvirtualenv tensorflow #会创建一个名为tensorflow的虚拟环境并激活，之后pip安装的所有包都仅仅存在于这个环境中。
mkvirtualenv paddle
```

#### **将现有的虚拟环境绑定到现有的项目**

```bash
setvirtualenvproject [virtualenv_path project_path]
```

如果不指定参数，则默认为当前虚拟环境和当前目录作为参数，单个项目可以绑定多个虚拟环境，从而可以轻松地在不同的Python版本或依赖之间切换以进行测试。

#### **列出所有的虚拟环境**

```bash
lsvirtualenv -b
```

#### **启动/切换虚拟环境**

```bash
workon tensorflow
workon paddle
```

#### **进入到当前虚拟环境目录**

```bash
cdvirtualenv
```

#### **退出虚拟环境**

```bash
deactivate
```

#### **删除虚拟环境**

```bash
rmvirtualenv paddle
rmvirtualenv tensorflow
```

#### **复制虚拟环境**

```bash
cpvirtualenv work develop # 复制虚拟环境work为develop
```

`lssitepackages`列出当前环境所有site-packages内容，`cdsitepackages`清楚环境内所有第三方包

### 其他命令

+ **`cdvirtualenv [subdir]`**:此时在一个虚拟环境中，改变当前工作目录到该虚拟环境所在目录，如果后面加subdir，则直接进入虚拟环境下的子目录

+ **`mktmpenv`**:创建一个临时环境，当deactivate时，环境被删除

+ **`cdsitepackages [subdir]`**:改变当前工作目录到 site-packages for $VIRTUAL_ENV

+ **`lssitepackages`**:列出当前激活的虚拟环境site-packages中的文件及子目录

+ **`mkproject`**:用法：`mkproject [-f|--force] [-t template] [virtualenv_options] ENVNAME`，创建一个新的虚拟环境在`WORKON_HOME` 和工程目录在`PROJECT_HOME`，工程目录与虚拟环境绑定，每次`workon ENVNAME` 直接使用python虚拟环境在项目目录下工作

+ ###### **`wipeenv`**: 删除当前虚拟环境中安装的所有的第三方包

+ **`showvirtualenv`**:显示单个虚拟环境的详细信息
