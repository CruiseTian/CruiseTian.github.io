---
title: rclone挂载谷歌云盘-为你的VPS扩容
tags:
  - rclone
  - Google Drive
  - VPS扩容
  - 云盘挂载
categories:
  - 技术分享
abbrlink: c3c257f2
date: 2020-06-24 15:48:04
---

## 写在前面

`Rclone`是一个 `Github` 上面的一个开源项目，专门开发用来在 Linux 上面同步文件/文件夹，上传的一个命令行工具，利用`rclone`能将全世界多个热门的网盘挂载为系统本地磁盘，实现方便快捷的云盘文件管理效果。搭配无限空间的Google Drive网盘，相当于在电脑上或服务器上安装了一个无比巨大的磁盘，以此来实现扩容。

最近我就在我自己的服务器上试了一下，果然可以，所以就来记录一下，方便以后查看。

<!-- more -->

## 说明

这里以Ubuntu18.04系统及Google Drive为例，记录一下安装步骤。

## 安装

### 安装`rclone`

```bash
sudo apt update && curl https://rclone.org/install.sh | sudo bash
```

### 配置`rclone`

在终端输入 `rclone config` 进行配置

会出现以下信息：

```bash
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> n #选择n表示新建一个配置
name> gc1 #输入你自己定义的配置名称，后边要用，所以得记住
Type of storage to configure.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / 1Fichier
   \ "fichier"
 2 / Alias for an existing remote
   \ "alias"
 3 / Amazon Drive
   \ "amazon cloud drive"
 4 / Amazon S3 Compliant Storage Provider (AWS, Alibaba, Ceph, Digital Ocean, Dreamhost, IBM COS, Minio, etc)
   \ "s3"
 5 / Backblaze B2
   \ "b2"
 6 / Box
   \ "box"
 7 / Cache a remote
   \ "cache"
 8 / Citrix Sharefile
   \ "sharefile"
 9 / Dropbox
   \ "dropbox"
10 / Encrypt/Decrypt a remote
   \ "crypt"
11 / FTP Connection
   \ "ftp"
12 / Google Cloud Storage (this is not Google Drive)
   \ "google cloud storage"
13 / Google Drive
   \ "drive"
14 / Google Photos
   \ "google photos"
15 / Hubic
   \ "hubic"
16 / In memory object storage system.
   \ "memory"
17 / Jottacloud
   \ "jottacloud"
18 / Koofr
   \ "koofr"
19 / Local Disk
   \ "local"
20 / Mail.ru Cloud
   \ "mailru"
21 / Mega
   \ "mega"
22 / Microsoft Azure Blob Storage
   \ "azureblob"
23 / Microsoft OneDrive
   \ "onedrive"
24 / OpenDrive
   \ "opendrive"
25 / OpenStack Swift (Rackspace Cloud Files, Memset Memstore, OVH)
   \ "swift"
26 / Pcloud
   \ "pcloud"
27 / Put.io
   \ "putio"
28 / QingCloud Object Storage
   \ "qingstor"
29 / SSH/SFTP Connection
   \ "sftp"
30 / Sugarsync
   \ "sugarsync"
31 / Tardigrade Decentralized Cloud Storage
   \ "tardigrade"
32 / Transparently chunk/split large files
   \ "chunker"
33 / Union merges the contents of several upstream fs
   \ "union"
34 / Webdav
   \ "webdav"
35 / Yandex Disk
   \ "yandex"
36 / http Connection
   \ "http"
37 / premiumize.me
   \ "premiumizeme"
38 / seafile
   \ "seafile"
Storage> 13 #这里Google Drive对应的为13，所以填入13
** See help for drive backend at: https://rclone.org/drive/ **

Google Application Client Id
Setting your own is recommended.
See https://rclone.org/drive/#making-your-own-client-id for how to create your own.
If you leave this blank, it will use an internal key which is low performance.
Enter a string value. Press Enter for the default ("").
client_id> #client_id可以填入自己的，也可以直接回车表示使用默认id
Google Application Client Secret
Setting your own is recommended.
Enter a string value. Press Enter for the default ("").
client_secret>  #client_secret跟client_id一样，上面使用默认这里就直接回车使用默认
Scope that rclone should use when requesting access from drive.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / Full access all files, excluding Application Data Folder.
   \ "drive"
 2 / Read-only access to file metadata and file contents.
   \ "drive.readonly"
   / Access to files created by rclone only.
 3 | These are visible in the drive website.
   | File authorization is revoked when the user deauthorizes the app.
   \ "drive.file"
   / Allows read and write access to the Application Data folder.
 4 | This is not visible in the drive website.
   \ "drive.appfolder"
   / Allows read-only access to file metadata but
 5 | does not allow any access to read or download file content.
   \ "drive.metadata.readonly"
scope> 1 #选择1，给所有权限
ID of the root folder
Leave blank normally.

Fill in to access "Computers" folders (see docs), or for rclone to use
a non root folder as its starting point.

Note that if this is blank, the first time rclone runs it will fill it
in with the ID of the root folder.

Enter a string value. Press Enter for the default ("").
root_folder_id> #这一项直接回车留空
Service Account Credentials JSON file path
Leave blank normally.
Needed only if you want use SA instead of interactive login.
Enter a string value. Press Enter for the default ("").
service_account_file> #这一项也直接回车留空
Edit advanced config? (y/n)
y) Yes
n) No (default)
y/n> n #输入n
Remote config
Use auto config?
 * Say Y if not sure
 * Say N if you are working on a remote or headless machine
y) Yes (default)
n) No
y/n> n #输入n
Please go to the following link: https://accounts.google.com/o/oauth2/auth?access_type=... #将这里的网址复制到浏览器，选择你要挂载谷歌云盘的帐号以后点击允许就可以获得一串代码，复制代码
Log in and authorize rclone for access
Enter verification code> ... #将你刚刚复制的代码粘贴进来回车
Configure this as a team drive?
y) Yes
n) No (default)
y/n> y #如果想要挂载共享团队盘就选择y，否则就选择n，这里我选择的是y
Fetching team drive list...
Choose a number from below, or type in your own value
 1 / All File
   \ "..."
Enter a Team Drive ID> 1 #输入你想要挂载的共享盘序号
--------------------
[gc1]
type = drive
scope = drive
token = {"access_token":...}
team_drive = 1
--------------------
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y #上面显示的信息没问题的话就选择y
Current remotes:

Name                 Type
====                 ====
gc1                  drive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q #输入q保存退出配置
```

上面所说的自己的`client_id`和`client_secret`的获取方法在这里：(摘自极一‘s Blog：[Rclone安装教程 - 使用Rclone挂载Google Drive,OneDrive等网盘](https://www.jiyiblog.com/archives/031167.html))

> 接着输入`client_id`及`client_secret`，这边可以直接按回车跳过，但是不推荐。跳过这个选项程序将使用公用API，导致在高峰时期上传失败。
>
> API获取方法：**(教育版帐号无法使用独立api，请忽略本方法）**
>
> 首先进入Google API网页启用API，地址:
> [![API.png](http://figure.cruisetian.top/img/3606928597.png)](https://cdn.jsdelivr.net/gh/jer0y/CDN/uploads/2020/03/3606928597.png)

> 接着再创建一个，地址：[点击进入](https://www.jiyiblog.com/go/aHR0cHM6Ly9jb25zb2xlLmRldmVsb3BlcnMuZ29vZ2xlLmNvbS9hcGlzL2NyZWRlbnRpYWxzL29hdXRoY2xpZW50)
>
> [![API2.png](http://figure.cruisetian.top/img/253742622.png)](https://cdn.jsdelivr.net/gh/jer0y/CDN/uploads/2020/03/253742622.png)
>
> 应用类型选`其他`，名称随意。
> 接着就会给你ID和密钥，填到Rclone里即可

## 挂载硬盘（这里坑比较多）

首先我们要在服务器上创建一个文件夹(作为 Google 云盘的载体盘)

```bash
mkdir /root/gdrive
```

然后挂载磁盘

```bash
#将刚刚配置的gc1中的File文件夹挂载在/root/gdrive下
rclone mount gc1:File /root/gdrive --allow-other --allow-non-empty --vfs-cache-mode writes &
```

之后运行`df -h`命令就可以查看挂载的磁盘了

```bash
df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            325M     0  325M   0% /dev
tmpfs            72M  1.2M   70M   2% /run
/dev/sda2        20G  4.5G   15G  24% /
tmpfs           356M     0  356M   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           356M     0  356M   0% /sys/fs/cgroup
/dev/loop0       98M   98M     0 100% /snap/core/9289
/dev/loop1       90M   90M     0 100% /snap/core/8268
tmpfs            72M     0   72M   0% /run/user/0
gc1:Book        1.0P     0  1.0P   0% /root/gdrive #这里表示挂载上了
```

卸载磁盘

```bash
fusermount -qzu gdrive
```
