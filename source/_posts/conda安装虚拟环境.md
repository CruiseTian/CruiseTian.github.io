---
title: conda安装虚拟环境
tags:
  - Anaconda
  - 虚拟环境
categories:
  - 日常学习
abbrlink: 7615c371
date: 2020-07-07 13:40:55
---

## 前言

不同的代码往往需要特定的运行环境。比如说有些代码需要在python3.6的环境下运行，有些代码需要在python2.7的环境下运行。这时就可以通过创建虚拟环境来营造代码运行适合的环境，而不会影响到自己本来的生产环境，所以就记录以下`conda`安装虚拟环境的命令，方便查阅。

`conda`的安装就不在这里详述，自行安装。

<!-- more -->

## conda安装虚拟环境

```bash
conda create -n your_env_name python=version（2.7、3.6等)
```

例如：

```bash
conda create -n py3.7.3 python=3.7.3
```

会出现以下结果：

```bash
Collecting package metadata (current_repodata.json): done
Solving environment: failed with repodata from current_repodata.json, will retry with next repodata source.
Collecting package metadata (repodata.json): done
Solving environment: done

## Package Plan ##

  environment location: /root/anaconda3/envs/py3.7.3

  added / updated specs:
    - python=3.7.3


The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    _libgcc_mutex-0.1          |             main           3 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    ca-certificates-2020.6.24  |                0         125 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    certifi-2020.6.20          |           py37_0         156 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    libedit-3.1.20191231       |       h7b6447c_0         167 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    libffi-3.2.1               |       hd88cf55_4          40 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    libgcc-ng-9.1.0            |       hdf63c60_0         5.1 MB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    libstdcxx-ng-9.1.0         |       hdf63c60_0         3.1 MB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    ncurses-6.2                |       he6710b0_1         817 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    openssl-1.1.1g             |       h7b6447c_0         2.5 MB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    pip-20.1.1                 |           py37_1         1.7 MB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    python-3.7.3               |       h0371630_0        32.1 MB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    readline-7.0               |       h7b6447c_5         324 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    setuptools-47.3.1          |           py37_0         514 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    sqlite-3.32.3              |       h62c20be_0         1.1 MB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    tk-8.6.10                  |       hbc83047_0         3.0 MB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    wheel-0.34.2               |           py37_0          51 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    xz-5.2.5                   |       h7b6447c_0         341 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    zlib-1.2.11                |       h7b6447c_3         103 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    ------------------------------------------------------------
                                           Total:        51.2 MB

The following NEW packages will be INSTALLED:

  _libgcc_mutex      anaconda/pkgs/main/linux-64::_libgcc_mutex-0.1-main
  ca-certificates    anaconda/pkgs/main/linux-64::ca-certificates-2020.6.24-0
  certifi            anaconda/pkgs/main/linux-64::certifi-2020.6.20-py37_0
  libedit            anaconda/pkgs/main/linux-64::libedit-3.1.20191231-h7b6447c_0
  libffi             anaconda/pkgs/main/linux-64::libffi-3.2.1-hd88cf55_4
  libgcc-ng          anaconda/pkgs/main/linux-64::libgcc-ng-9.1.0-hdf63c60_0
  libstdcxx-ng       anaconda/pkgs/main/linux-64::libstdcxx-ng-9.1.0-hdf63c60_0
  ncurses            anaconda/pkgs/main/linux-64::ncurses-6.2-he6710b0_1
  openssl            anaconda/pkgs/main/linux-64::openssl-1.1.1g-h7b6447c_0
  pip                anaconda/pkgs/main/linux-64::pip-20.1.1-py37_1
  python             anaconda/pkgs/main/linux-64::python-3.7.3-h0371630_0
  readline           anaconda/pkgs/main/linux-64::readline-7.0-h7b6447c_5
  setuptools         anaconda/pkgs/main/linux-64::setuptools-47.3.1-py37_0
  sqlite             anaconda/pkgs/main/linux-64::sqlite-3.32.3-h62c20be_0
  tk                 anaconda/pkgs/main/linux-64::tk-8.6.10-hbc83047_0
  wheel              anaconda/pkgs/main/linux-64::wheel-0.34.2-py37_0
  xz                 anaconda/pkgs/main/linux-64::xz-5.2.5-h7b6447c_0
  zlib               anaconda/pkgs/main/linux-64::zlib-1.2.11-h7b6447c_3


Proceed ([y]/n)? y


Downloading and Extracting Packages
libedit-3.1.20191231 | 167 KB    | ################################### | 100%
xz-5.2.5             | 341 KB    | ################################### | 100%
wheel-0.34.2         | 51 KB     | ################################### | 100%
pip-20.1.1           | 1.7 MB    | ################################### | 100%
openssl-1.1.1g       | 2.5 MB    | ################################### | 100%
python-3.7.3         | 32.1 MB   | ################################### | 100%
libstdcxx-ng-9.1.0   | 3.1 MB    | ################################### | 100%
ca-certificates-2020 | 125 KB    | ################################### | 100%
libffi-3.2.1         | 40 KB     | ################################### | 100%
ncurses-6.2          | 817 KB    | ################################### | 100%
certifi-2020.6.20    | 156 KB    | ################################### | 100%
libgcc-ng-9.1.0      | 5.1 MB    | ################################### | 100%
_libgcc_mutex-0.1    | 3 KB      | ################################### | 100%
zlib-1.2.11          | 103 KB    | ################################### | 100%
tk-8.6.10            | 3.0 MB    | ################################### | 100%
setuptools-47.3.1    | 514 KB    | ################################### | 100%
readline-7.0         | 324 KB    | ################################### | 100%
sqlite-3.32.3        | 1.1 MB    | ################################### | 100%
Preparing transaction: done
Verifying transaction: done
Executing transaction: done
#
# To activate this environment, use
#
#     $ conda activate py3.7.3
#
# To deactivate an active environment, use
#
#     $ conda deactivate
```

激活虚拟环境

```bash
conda activate my_env_name
```

激活之后，命令行的最前面就会出现虚拟环境的名字如下：

```bash
(py3.7.3) root@debian:~#
```

退出虚拟环境

```bash
conda deactivate
```

## 查看Conda环境下所有的虚拟环境

```bash
conda info --envs
```

## 删除Conda虚拟环境

```bash
conda remove -n my_env_name --all
```

`my_env_name`对应的就是要删除的虚拟环境名称
