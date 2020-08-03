---
title: Windows terminal安装使用及美化(2)
tags:
  - windows terminal
  - 设置
  - 终端
categories:
  - 软件分享
abbrlink: ebf33f81
date: 2020-05-26 01:58:10
---

## 写在前面

上一个part只写了一些基础配置，这个part就写一写进阶的配置。主要包括power shell的美化，以及添加新的terminal，比如`git-bash`等。

## 美化Power shell

本文我们用 `oh-my-posh` 在 PowerShell 中实现Linux中`oh-my-zsh` 的样子，部分效果如下：

![来自oh-my-posh官方主页](http://figure.cruisetian.top/img/indications.png)

>上一次失败命令（×）、管理员权限指示（⚡）、显示所登录的用户名和域名、所在工作目录指示（蓝色领带）、posh-git模块提供的Git状态指示器（黄色领带）

<!-- more -->

### 安装oh-my-posh（和posh-git）

首先需要以管理员权限启动 PowerShell，以便执行安装操作。(windows10快捷键为`Windows+X`,然后按A，选择管理员运行power shell)

首先安装Chocolatey

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

用 Chocolatey安装 ConEmu

```powershell
choco install ConEmu
```

然后，运行命令以安装 posh-git，这是 oh-my-posh 的依赖

```powershell
Install-Module posh-git -Scope CurrentUser
```

接下来，运行命令以安装 oh-my-posh 本身

```powershell
Install-Module oh-my-posh -Scope CurrentUser
```

### 基本设置

安装完成后，输入

```powershell
Import-Module posh-git
Import-Module oh-my-posh
Set-Theme PowerLine
```

**如果你的电脑里没有安装Git，在输入`Import-Module posh-git`会报错，解决方法是[安装Git](https://git-scm.com/)或者把这一行去掉，相应的下面的配置文件也要删除这一句**

但是这次使用`Import-Module`的指令，再次启动PowerShell就会发现没有效果，这是因为这些指令仅限于本次会话的PowerShell有效，因此，若要使这一效果在每次启动的时候都有效，那就要将其添加到启动脚本中。

使用记事本打开PS配置文件（如无则创建该文件）

```powershell
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
```

随后，在打开的记事本窗口里，在文末加入下面内容，以让Powershell在启动之时应用主题，然后保存。（仅对当前用户生效）

```text
Import-Module posh-git
Import-Module oh-my-posh
Set-Theme Paradox
```

关闭脚本禁用：允许Powershell运行脚本

```powershell
set-executionpolicy remotesigned
```

再度打开Powershell之时，你就会发现power shell变成了下面这副样子

![](http://figure.cruisetian.top/img/Snipaste_2020-05-23_21-21-05.png)

还是很丑，所以我们使用Windows terminal进行配置

### Windows terminal配置

打开Windows terminal，然后在下箭头处展开列表，选中设置打开JSON配置文件（也可使用默认的“Ctrl+,”组合键）后定位到profiles区域，可单独对不同终端进行配置。

其中各个参数的注释如下，可以选择自行修改

```json
"profiles" :
    [
        {
            "acrylicOpacity" : 0.70, //亚克力背景透明度（需启用useAcrylic）
            "background" : "#012456", //背景颜色，PS默认为蓝色
            "closeOnExit" : true, //关闭窗口的时候退出所有挂载的程序
            "colorScheme" : "Dracula", //配色方案（Dracula需导入）
            "commandline" : "powershell.exe", //此处终端打开PS
            "cursorColor" : "#FFFFFF", //光标颜色
            "cursorShape" : "bar", //光标形状（默认为bar，即条状）
            "fontFace" : "Consolas", //所用字体
            "fontSize" : 14, //字体大小
            "guid" : "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}", //唯一标识符，随机生成
            "historySize" : 9001, //缓存大小
            "icon" : "ms-appx:///ProfileIcons/{61c54bbd-c2c6-5271-96e7-009a87ff44bf}.png", //图标
            "name" : "Windows PowerShell", //在下拉菜单里显示的名称
            "tabTitle" : "Windows PowerShell", //在选项卡上显示的名称
            "padding" : "0, 0, 0, 0", //内容的边框距，默认填充全部空间
            "snapOnInput" : true, //输入的时候自动滚动到输入位置
            "startingDirectory" : "%USERPROFILE%", //初始工作目录，默认为用户目录
            "useAcrylic" : true //使用亚克力效果
        }
    ]
```

这里贴一下我自己用的修改项，各个参数的效果我都用比较易懂的语言写在后面了

```json
"foreground" : "#ffffff",         //字体颜色
//"cursorColor" : "#fbff00",        //光标颜色
"cursorShape" : "bar",              //光标类型
"startingDirectory" : "%USERPROFILE%", //初始工作目录，默认为用户目录

//设置背景
"acrylicOpacity": 0.6,  //背景毛玻璃不透明度
"useAcrylic": true,     //背景使用毛玻璃效果
"background": "#0c0c0c"    //背景颜色
```

### 下载个性化字体，支持特殊符号

因为这个主题有一些特殊符号，比如闪电，叉号等，默认字体不支持，就会放几个框框在哪里，比较难看，所以下载一个支持特殊符号的字体并应用，字体链接如下：<https://github.com/adam7/delugia-code/releases/download/v1910.04.1/Delugia.Nerd.Font.Complete.ttf>

下载完以后点击安装即可，然后在power shell的json设置项，将字体改为 "Delugia Nerd Font"，即

```json
"fontFace": "Delugia Nerd Font",
```

## 增加一个新的终端（以bash为例）

打开Windows terminal的配置文件（Win+,)

### 新增一个 profile

我们把原来的一个 profile 复制一份出来，这样我们就能够写一份自己的终端配置了。然后在下面粘贴一下，并进行一些修改，就比如我这样。

![](http://figure.cruisetian.top/img/Snipaste_2020-05-23_21-52-52.png)

### 修改参数

其中你粘贴下去的文件有一些项必须要修改

+ `guid` 必须使用新的跟其他终端不重复的 guid，可以使用下面的guid的工具来生成：[在线guid生成工具](https://www.uuidgenerator.net/guid)
+ `commandline` 你需要改成你的新的终端的路径，如果你是通过安装 Git for Windows 而安装的 Git Bash，那么默认路径就是 `C:\Program Files\Git\bin\bash.exe`，否则请修改为你自己定义的路径
+ `name` 改为终端的名称，这个大家可以自定义

下面这些参数根据自己需要来修改

+ `useAcrylic` 使用毛玻璃效果
+ `acrylicOpacity` 毛玻璃效果透明度
+ `fontFace` 字体名称
+ `fontSize` 字号大小
+ `icon` 图标，路径修改为你自己图标的路径
+ `startingDirectory` 初始路径

这里提供一个git-bash的图标，有需要的可以自取

![](http://figure.cruisetian.top/img/git-bash.jpg)

最后保存这个配置文件，再点击Windows terminal的向下箭头，就可以看到你自己自定义的配置了。
