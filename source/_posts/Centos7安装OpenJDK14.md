---
title: Centos7安装OpenJDK14
tags:
  - java
  - openJDK
  - centos7
categories:
  - 日常学习
abbrlink: 584b409a
date: 2020-05-31 11:23:29
---

## 检查并卸载原本有的java版本

### 查看Centos7自带的JDK是否已安装

在命令行输入：

```bash
java -version
```

如果出现以下结果，则说明已安装，需要先卸载，否则的话直接跳过这一步。

```bash
openjdk version "1.8.0 102"
OpenJDK Runtime Environment (build 1.8.0_102-b14)
OpenJDK 64-Bit Server VM(build 25.102-bi4, mixed mode)
```

<!-- more -->

### 查看已安装文件

首先查看文件，在命令行输入：

```bash
rpm -qa | grep java
```

会出现如下信息：

```bash
java-1.7.0-openjdk-1.7.0.I11-2.6.7.8.el7.x86_64
python-javapackages-3.4.1-11.el7.noarch
tzdata-java-2016g-2.el7.noarch
javapackages-tools-3.4.1-11.el7.noarch
java-1.8.0-openjdk-1.8.0.102-4.b14.el7.x86_64
java-1.8.0-openjdk-headless-1.8.0.102-4.b14.el7.x86_64
java-1.7.0-openjdk-headless-1.7.0.111-2.6.7.8.el7.x86_64
```

### 删除相关的文件

 在命令行输入（把上面出现的全部删除，把命令中的 * 替换成文件名）：

```bash
yum -y remove java-*.*.*
```

### 判断是否全部删除

在命令行输入：

```bash
rpm -qa | grep java
```

无文件，表示删除成功！

## 安装OpenJDK 14

### 下载解压

安装相关软件：

```bash
sudo yum -y install curl
```

下载二进制包:

```bash
curl -O https://download.java.net/java/GA/jdk14/076bab302c7b4508975440c56f6cc26a/36/GPL/openjdk-14_linux-x64_bin.tar.gz
```

使用tar命令解压缩下载的OpenJDK 14归档文件。

```bash
tar xvf openjdk-14_linux-x64_bin.tar.gz
```

将结果文件夹移动到*/ opt*目录。

```bash
sudo mv jdk-14 /opt/
```

### 环境配置

配置Java环境：

```bash
sudo tee /etc/profile.d/jdk14.sh <<EOF
export JAVA_HOME=/opt/jdk-14
export PATH=\$PATH:\$JAVA_HOME/bin
EOF
```

获取您的配置文件并检查 `java` 命令

```bash
source /etc/profile.d/jdk14.sh
```

确认Java版本：

```bash
$ echo $JAVA_HOME
/opt/jdk-14

$ java -version
openjdk version "14" 2020-03-17
OpenJDK Runtime Environment (build 14+36-1461)
OpenJDK 64-Bit Server VM (build 14+36-1461, mixed mode, sharing)
```

## 测试Java安装

顺便来编写第一个Java程序。

打开文本编辑器，输入以下代码：

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

把代码保存为文件，文件名必须是`Hello.java`，而且文件名也要注意大小写，因为要和定义的类名`Hello`完全保持一致。

编译Java代码:

```bash
$ javac Hello.java
```

如果源代码无误，上述命令不会有任何输出，而当前目录下会产生一个`Hello.class`文件：

```bash
$ ls
Hello.class	Hello.java
```

执行`Hello.class`:

```bash
$ java Hello
Hello, World!
```

测试成功，环境配置完成。
