---
title: Windows terminal安装使用及美化(3)
tags:
  - windows terminal
  - 设置
  - 终端
categories:
  - 软件分享
abbrlink: f2e80ec0
date: 2020-05-27 01:30:23
---

## 写在前面

之前两个part写了一些关于Windows terminal的基础和进阶配置，配置好以后用了两天感觉不错，所以就准备把它作为Windows下主要使用的命令行工具，所以决定把它加到右键菜单里去，在这里记录一下过程，也算是有关Windows terminal的高阶分享吧。

<!-- more -->

## 添加过程

### 测试变量

下面的两个变量后面的操作需要使用到。所以，先测试下是否正常。用 `cmd` 分别输入这 2 句命令(使用`gitbash`无效的)

```bash
echo %USERPROFILE%
echo %LOCALAPPDATA%
```

如果有报错，接下来的操作，请把对应的部分进行替换。

```bash
%USERPROFILE% => C:\Users\{username}
%LOCALAPPDATA% => C:\Users\{userName}\AppData\Local
```

**注意** `{userName}`为自己的用户名

### 获取图标

创建 Terminal 文件夹，用来存放图标。

```bash
mkdir "%USERPROFILE%\AppData\Local\Terminal"
```

从微软的Github上下载Windows Terminal的图标，地址如下:<https://github.com/microsoft/terminal/blob/master/res/terminal.ico>
 然后将图标保存到`%USERPROFILE%\AppData\Local\Terminal`目录中。

### 添加注册表文件

新建一个文件，文件名随意 比如`wt.reg`。记得保存为`.reg`文件(名称随意，后缀名不可以错)，并添加以下内容然后保存。

```csharp
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
@="Windows Terminal Here"
"Icon"="%USERPROFILE%\\AppData\\Local\\Terminal\\terminal.ico"

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
@="C:\\Users\\{username}\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"
```

**注意** 上面的`{userName}`为自己的用户名

然后双击执行这个`.reg`文件就可以了。这时候就会发现右键菜单里面有了Windows Terminal Here选项。

### 真正的Windows terminal "Here"

执行完上面的操作你会发现虽然右键可以打开Windows terminal，但是在任何文件夹打开的 Windows terminal 都不是当前的目录，这还怎么叫做`here`呢。继续配置

打开Windows terminal的配置文件（在Windows terminal向下箭头的设置中），找到 `startingDirectory`改为：`./` 即：`"startingDirectory": "./"`，就可以做到在当前目录打开啦。

## 后记

到这里，Windows terminal的配置就基本结束啦，如果想要更多其它的效果，大家可以自己折腾，有什么不理解的或者更好的想法也可以在评论区里说出来，大家一起交流。
