---
title: Windows terminal安装使用及美化(1)
tags:
  - windows terminal
  - 设置
  - 终端
categories:
  - 软件分享
abbrlink: c0de6c42
date: 2020-05-23 22:13:56
---

## 写在前面

最近在做课程大作业，因为我用的是Windows10，所以需要频繁使用`cmd`和`power shell`，但是原本的窗口实在是，太丑了不管是`cmd`的傻大黑粗和难看的字体，还是`power shell`那奇异的蓝色背景，都是一言难尽，正好最近微软发布了`Windows terminal 1.0`,所以我就折腾了一下，搞出了一个稍微好看一点的终端，在这里记录一下。（其实还是为了折腾2333)

<!-- more -->

## 安装

1. 直接在 Windows 10 的 `应用商店` 里面安装。

- 桌面左下角点击 窗口图标， 输入 `store` , 点击打开 应用商店。
- 点击右上角搜索图标，输入 `terminal` ，选择 `Windows Terminal`
- 根据提示选择安装即可。

2. 在GitHub下载安装

   GitHub地址：<https://github.com/microsoft/terminal/releases>

## 基础设置

打开刚刚安装的`Windows terminal`（可以在开始菜单找到），默认打开的是`power shell`的蓝色界面，然后点击上面菜单栏的**+**旁边的向下箭头，选择设置；或者用快捷键`Ctrl+,`，打开设置文件。

![](http://figure.cruisetian.top/img/Snipaste_2020-05-23_20-03-28.png)

### 设定缺省shell

先找到 “profiles” 配置项，看里面 cmd.exe 对应的 `guid` 是什么，拷贝 cmd.exe 对应的 `guid` 到 “defaultProfile” 中，这样再打开Windows terminal打开的就是cmd了，当然你也可以自己设置这个参数。

### 设定选中即复制

修改 “copyOnSelect” 选项的值为 `true` ，如下所示

```json
"copyOnSelect": true,
```

这样就只需要选中就可以自动复制到剪贴板了，比较方便。

### 设定字体

在你使用的profile中加入如下配置即可

```json
        "fontFace" : "Consolas",
        "fontSize" : 12,
```

`fontFace` 是字体名， 比如 Consolas、NSimsun、SimHei、Consolas，必须是本机能找到的字体文件。
`fontSize` 是字体大小。

比如我的设置：

![](http://figure.cruisetian.top/img/Snipaste_2020-05-23_20-32-27.png)

### 设定配色

在“schema”配置项自行修改，每个人要求不一样，这里放一下我的配置

```json
  "schemes": [
    {
      "name": "Campbell",

      "cursorColor": "#FFFFFF",
      "selectionBackground": "#ffffff",

      "background": "#063d3a",
      "foreground": "#ece4e4",

      "black": "#0C0C0C",
      "blue": "#0037DA",
      "cyan": "#3A96DD",
      "green": "#13A10E",
      "purple": "#881798",
      "red": "#C50F1F",
      "white": "#CCCCCC",
      "yellow": "#C19C00",
      "brightBlack": "#767676",
      "brightBlue": "#3B78FF",
      "brightCyan": "#61D6D6",
      "brightGreen": "#16C60C",
      "brightPurple": "#B4009E",
      "brightRed": "#E74856",
      "brightWhite": "#F2F2F2",
      "brightYellow": "#F9F1A5"
    }
  ],
```

大家可以在可以调色的文本编辑器中打开设置文件 settings.json ，直观的调整为你喜欢的颜色，推荐VS Code。
