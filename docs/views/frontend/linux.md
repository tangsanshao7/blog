## 1. 操作系统概述

### 1.1 操作系统及作用

> 目标: 了解什么是操作系统、操作系统的作用是什么

操作系统, operating system，简称OS。

没有安装操作系统的计算机通常被称为裸机。

操作系统是安装在计算机硬件设备上的第一层软件, 其他的应用软件都直接依赖于操作系统的支持。

操作系统的主要作用是直接操作硬件设备, 并为应用程序提供易于使用的接口。

![](/img/frontend/linux//images/01.png)

### 1.2 不同领域的主流操作系统

* 桌面操作系统
* 服务器操作系统
* 移动设备操作系统

#### 1.2.1 桌面操作系统

* Windows 系列
  * 推广时间长, 应用软件多, 用户群体大
  * 安全性、稳定性稍差
* macOS
  * 更加适合于办公场景, 安全稳定
  * 作为开发机体验相当好
* Linux
  * 应用软件少, 在桌面操作系统领域市场占有率小

#### 1.2.2 服务器操作系统

* Linux
  * 安全、稳定、免费、服务器软件齐全
  * 服务器操作系统领域占有率高
  
* Windows Server
  * 付费, 服务器软件不齐全
  * 服务器操作系统领域占有率低

#### 1.2.3  移动设备操作系统

  * IOS
  * Android（基于`Linux`）

## 2. linux 概述

### 2.1  简介

Linux 内核最初只是由芬兰人林纳斯·托瓦兹（Linus Torvalds）在赫尔辛基大学上学时出于个人爱好而编写的。

Linux 是一套免费使用和自由传播的操作系统内核，是一个多用户、多任务的操作系统内核。

![](/img/frontend/linux/images/03.jpg)

### 2.1 内核与发行版本

#### 2.1.1 内核版本

**内核（kernel）**是系统的心脏，是运行应用和管理硬件设备的核心程序，它提供了一个在裸机设备与应用程序间的抽象层。

Linux 内核版本又分为 **稳定版** 和 **开发版**，两种版本是相互关联，相互循环。

**稳定版**：具有工业级强度，可以广泛地应用和部署。新的稳定版相对于较旧的只是修正一些 bug 或加入一些新的驱动程序。

**开发版**：由于要试验各种解决方案，所以变化很快。

内核源码网址：http://www.kernel.org

所有来自全世界的对 Linux 源码的修改最终都会汇总到这个网站，由 Linus 领导的开源社区对其进行甄别和修改最终决定是否进入到 Linux 主线内核源码中。

#### 2.1.2 发行版本

Linux 发行版是一个由 Linux 内核、附加软件和软件包管理器及桌面环境组成的操作系统。Linux 是内核, 而Linux发行版是操作系统。

这个术语之所以叫Linux发行版, 是因为像 Debian、Ubuntu 这样的机构"发行"了 Linux 内核以及所有必要的软件及实用程序(如网络管理器、软件包管理器、桌面环境等), 使其可以作为一个操作系统使用。

##### 1.RedHat Linux

RedHat 领导着 Linux 的开发、部署和经营, 从嵌入式设备到安全网页服务器, 它都是用开源软件基础设施解决方案的领头羊。 

RedHat 解决方案包括 RedHat Linux、开发人员和嵌入式技术，以及培训、管理和技术支持。

![](/img/frontend/linux/images/06.png)

##### 2.Ubuntu Linux

Ubuntu(乌班图)是一个以桌面应用为主的 Linux 操作系统, 它的目标在于为一般用户提供一个最新的、同时又相当稳定的操作系统。

![](/img/frontend/linux/images/04.png)

##### 3.CentOS Linux

CentOS 是社区企业操作系统, 是社区驱动的开源项目, 它是免费的。

由 RedHat Enterprise Linux 源代码编译而成, 很多公司使用 CentOS 替代商业版 RedHat Linux。

CentOS 的技术支持主要通过社区的官方邮件列表、论坛和聊天室。


![](/img/frontend/linux/images/05.png)

## 3. 系统安装

### 3.1 安装虚拟机软件

#### 3.1.1 虚拟机

虚拟机（Virtual Machine）指通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。

#### 3.1.2 Windows

[VMware Workstation Pro v16.2.1 虚拟机软件及许可证](https://www.ypojie.com/6066.html)

> VM16 -> Windows 10 或更高版64位
>
> VM15 -> Windows 7 或更高版64位
>
> VM12 -> Windows 7 或更高版64位
>
> 官方自VM14版本开始不支持某些老旧电脑硬件
>
> 会提示不支持或安装失败, 如遇到请退回12版本。

![](/img/frontend/linux/vmware_install_windows/01.png)

![](/img/frontend/linux/vmware_install_windows/02.png)

![](/img/frontend/linux/vmware_install_windows/03.png)

![](/img/frontend/linux/vmware_install_windows/04.png)

![](/img/frontend/linux/vmware_install_windows/05.png)

![](/img/frontend/linux/vmware_install_windows/06.png)

![](/img/frontend/linux/vmware_install_windows/07.png)

![](/img/frontend/linux/vmware_install_windows/08.png)

![](/img/frontend/linux/vmware_install_windows/09.png)

![](/img/frontend/linux/vmware_install_windows/10.png)

![](/img/frontend/linux/vmware_install_windows/11.png)

![](/img/frontend/linux/vmware_install_windows/12.png)

#### 3.1.3 MacOS

[VMware_Fusion_Pro_12.2.1_(18811640)_(最低11.0)](https://www.macwk.com/soft/vmware-fusion)

更多机型对应的版本请访问以上网址中的软件历史版本

![](/img/frontend/linux/wmware_install_mac/00.png)

![](/img/frontend/linux/wmware_install_mac/01.png)

![](/img/frontend/linux/wmware_install_mac/02.png)

![](/img/frontend/linux/wmware_install_mac/03.png)

![](/img/frontend/linux/wmware_install_mac/04.png)

![](/img/frontend/linux/wmware_install_mac/05.png)

![](/img/frontend/linux/wmware_install_mac/06.png)

![](/img/frontend/linux/wmware_install_mac/07.png)

![](/img/frontend/linux/wmware_install_mac/08.png)

![](/img/frontend/linux/wmware_install_mac/09.png)

### 3.2 配置虚拟机

#### 3.2.1 Windows

![](/img/frontend/linux/virtualMachine_windows/1.png)

![](/img/frontend/linux/virtualMachine_windows/2.png)

![](/img/frontend/linux/virtualMachine_windows/3.png)

![](/img/frontend/linux/virtualMachine_windows/4.png)

![](/img/frontend/linux/virtualMachine_windows/5.png)

![](/img/frontend/linux/virtualMachine_windows/6.png)

![](/img/frontend/linux/virtualMachine_windows/7.png)

![](/img/frontend/linux/virtualMachine_windows/8.png)

![](/img/frontend/linux/virtualMachine_windows/9.png)

#### 3.2.2 MacOS

![](/img/frontend/linux/virtualMachine_mac/1.png)

![](/img/frontend/linux/virtualMachine_mac/2.png)

![](/img/frontend/linux/virtualMachine_mac/3.png)

![](/img/frontend/linux/virtualMachine_mac/4.png)

![](/img/frontend/linux/virtualMachine_mac/5.png)

![](/img/frontend/linux/virtualMachine_mac/6.png)

![](/img/frontend/linux/virtualMachine_mac/7.png)

![](/img/frontend/linux/virtualMachine_mac/8.png)

![](/img/frontend/linux/virtualMachine_mac/9.png)

![](/img/frontend/linux/virtualMachine_mac/10.pn)

![](/img/frontend/linux/virtualMachine_mac/11.pn)

#### 3.2.3 配置虚拟机常见问题

##### 1. VMware版本问题

![](/img/frontend/linux/imimages/07.png)
解决思路: 按照版本说明更换合适的虚拟机版本

##### 2. 计算机虚拟化禁用了

![](/img/frontend/linux/imimages/08.)
参考：https://jingyan.baidu.com/article/fc07f98976710e12ffe519de.html

##### 3. 虚拟机被移动

![](/img/frontend/linux/imimages/09.)
点击"我已复制该虚拟机"

##### 4. 不支持CPUID错误

![](/img/frontend/linux/imimages/10.)
![](/img/frontend/linux/imimages/11.)
先点击"确定"，再点击"放弃"

##### 5. 第一次使用虚拟机

![](/img/frontend/linux/imimages/12.)
![](/img/frontend/linux/imimages/13.)
##### 6. 权限不足

![](/img/frontend/linux/imimages/14.)
![](/img/frontend/linux/imimages/15.)
##### 7. 计算机配置问题

![](/img/frontend/linux/imimages/16.)
参考链接: https://jingyan.baidu.com/article/fc07f98976710e12ffe519de.html

##### 8. ISO文件损坏或丢失

![](/img/frontend/linux/imimages/17.)
损坏的解决方案: 重新拷贝一份ISO文件

丢失的解决方案: 在启动前，请先配置ISO文件

##### 9. 句柄无效

![](/img/frontend/linux/imimages/18.)
1. 查询虚拟机存放的位置

   ![](/img/frontend/linux/imimages/19.)
2. 用记事本打开 CentOS7.vmx 文件

   找到 vmci0.present = "TRUE" 一项: 将 TRUE 修改成 FALSE

   ![](/img/frontend/linux/imimages/20.)
### 3.3 安装 Ubuntu

安装系统之前先更改系统文件下载镜像地址, 提升安装系统过程中文件的下载速度。

安装系统之前先更改 Ubuntu 临时系统的显示分辨率, 否则安装界面将显示不全。

![](/img/frontend/linux/ubuntu_install/0.png)

![](/img/frontend/linux/ubuntu_install/1.png)

![](/img/frontend/linux/ubuntu_install/2.png)

![](/img/frontend/linux/ubuntu_install/13.png)

![](/img/frontend/linux/ubuntu_install/14.png)

![](/img/frontend/linux/ubuntu_install/15.png)

![](/img/frontend/linux/ubuntu_install/16.png)

![](/img/frontend/linux/ubuntu_install/17.png)

![](/img/frontend/linux/ubuntu_install/18.png)

![](/img/frontend/linux/ubuntu_install/19.png)

![](/img/frontend/linux/ubuntu_install/20.png)

![](/img/frontend/linux/ubuntu_install/21.png)

![](/img/frontend/linux/ubuntu_install/22.png)

![](/img/frontend/linux/ubuntu_install/23.png)

![](/img/frontend/linux/ubuntu_install/24.png)

![](/img/frontend/linux/ubuntu_install/25.png)

![](/img/frontend/linux/ubuntu_install/26.png)

![](/img/frontend/linux/ubuntu_install/27.png)

![](/img/frontend/linux/ubuntu_install/28.png)

![](/img/frontend/linux/ubuntu_install/29.png)

![](/img/frontend/linux/ubuntu_install/30.png)

![](/img/frontend/linux/ubuntu_install/31.png)

![](/img/frontend/linux/ubuntu_install/32.png)

![](/img/frontend/linux/ubuntu_install/3.png)

![](/img/frontend/linux/ubuntu_install/4.png)

![](/img/frontend/linux/ubuntu_install/5.png)

![](/img/frontend/linux/ubuntu_install/6.png)

![](/img/frontend/linux/ubuntu_install/7.png)

![](/img/frontend/linux/ubuntu_install/8.png)

![](/img/frontend/linux/ubuntu_install/9.png)

![](/img/frontend/linux/ubuntu_install/10.png)

![](/img/frontend/linux/ubuntu_install/11.png)

![](/img/frontend/linux/ubuntu_install/33.png)

![](/img/frontend/linux/ubuntu_install/34.png)

![](/img/frontend/linux/ubuntu_install/35.png)

![](/img/frontend/linux/ubuntu_install/36.png)

![](/img/frontend/linux/ubuntu_install/37.png)

![](/img/frontend/linux/ubuntu_install/38.png)

### 3.4 安装 VMware Tools

![](/img/frontend/linuxVMwareTools_install/29.png)

![](/img/frontend/linux/VMwareTools_install/30.png)

![](/img/frontend/linux/VMwareTools_install/31.png)

![](/img/frontend/linux/VMwareTools_install/32.png)

![](/img/frontend/linux/VMwareTools_install/33.png)

![](/img/frontend/linux/VMwareTools_install/34.png)

![](/img/frontend/linux/VMwareTools_install/35.png)

![](/img/frontend/linux/VMwareTools_install/36.png)

![](/img/frontend/linux/VMwareTools_install/37.png)

![](/img/frontend/linux/VMwareTools_install/38.png)

![](/img/frontend/linux/VMwareTools_install/39.png)

![](/img/frontend/linux/VMwareTools_install/40.png)

![](/img/frontend/linux/VMwareTools_install/41.png)

![](/img/frontend/linux/VMwareTools_install/42.png)

![](/img/frontend/linux/VMwareTools_install/43.png)

![](/img/frontend/linux/VMwareTools_install/44.png)

## 4. 系统快照

快照可以记录当前系统的状态, 用来在操作系统发生故障时将系统恢复至之前没有故障的状态。

### 4.1 拍摄快照

![](/img/frontend/linux/snap_shot_mac/1.png)

### 4.2 管理快照

![](/img/frontend/linux/snap_shot_mac/2.png)

![](/img/frontend/linux/snap_shot_mac/3.png)

### 4.3 恢复快照

![](/img/frontend/linux/snap_shot_mac/4.png)

![](/img/frontend/linux/snap_shot_mac/5.png)

![](/img/frontend/linux/snap_shot_mac/6.png)

## 5. 文件和目录

### 5.1 单用户操作系统和多用户操作系统

**单用户操作系统:** 一台计算机在同一时间只能由一个用户使用，一个用户独自享用系统的全部硬件和软件资源 (Windows XP 之前)

**多用户操作系统**：一台计算机在同一时间可以由多个用户使用，多个用户共同享用系统的全部硬件和软件资源 (Linux)

### 5.2 Windows 和 Linux 文件系统的区别

#### 5.2.1 windows

在 `Windows` 下, 打开"计算机", 我们看到的是一个个的驱动器盘符:

![](/img/frontend/linux/imimages/25.png
每个驱动器都有自己的根目录结构, 这样形成了多个树并列的情况, 如下图所示: 

![](/img/frontend/linux/imimages/26.png
#### 5.2.2 Linux

在 `Linux` 下, 我们是看不到驱动器盘符，我们看到的是文件夹(目录):

![](/img/frontend/linux/imimages/27.png
linux `没有盘符概念, 只有一个根目录 `, 所有文件都在它的下面

![](/img/frontend/linux/imimages/28.png
### 5.3 用户目录

`~` 表示当前用户的家目录

![](/img/frontend/linux/imimages/29.png
### 5.4 Linux 主要目录速查表

* /：根目录，**一般根目录下只存放目录**，在 linux 下有且只有一个根目录，所有的东西都是从这里开始
  * 当在终端里输入 `/home`，其实是在告诉电脑，先从 `/`（根目录）开始，再进入到 `home` 目录
* /bin、/usr/bin：可执行二进制文件的目录，如常用的命令 ls、tar、mv、cat 等
* /boot：放置 linux 系统启动时用到的一些文件，如 linux 的内核文件：`/boot/vmlinuz`，系统引导管理器：`/boot/grub`
* /dev：存放linux系统下的设备文件，访问该目录下某个文件，相当于访问某个设备，常用的是挂载光驱`mount /dev/cdrom /mnt`
* /etc：系统配置文件存放的目录，不建议在此目录下存放可执行文件，重要的配置文件有 
  * /etc/inittab
  * /etc/fstab
  * /etc/init.d
  * /etc/X11
  * /etc/sysconfig
  * /etc/xinetd.d
* /home：系统默认的用户家目录，新增用户账号时，用户的家目录都存放在此目录下
  * `~` 表示当前用户的家目录
  * `~edu` 表示用户 `edu` 的家目录
* /lib、/usr/lib、/usr/local/lib：系统使用的函数库的目录，程序在执行过程中，需要调用一些额外的参数时需要函数库的协助
* /lost+fount：系统异常产生错误时，会将一些遗失的片段放置于此目录下
* /mnt: /media：光盘默认挂载点，通常光盘挂载于 /mnt/cdrom 下，也不一定，可以选择任意位置进行挂载
* /opt：给主机额外安装软件所摆放的目录
* /proc：此目录的数据都在内存中，如系统核心，外部设备，网络状态，由于数据都存放于内存中，所以不占用磁盘空间，比较重要的文件有：/proc/cpuinfo、/proc/interrupts、/proc/dma、/proc/ioports、/proc/net/* 等
* /root：系统管理员root的家目录
* /sbin、/usr/sbin、/usr/local/sbin：放置系统管理员使用的可执行命令，如 fdisk、shutdown、mount 等。与 /bin 不同的是，这几个目录是给系统管理员 root 使用的命令，一般用户只能"查看"而不能设置和使用
* /tmp：一般用户或正在执行的程序临时存放文件的目录，任何人都可以访问，重要数据不可放置在此目录下
* /srv：服务启动之后需要访问的数据目录，如 www 服务需要访问的网页数据存放在 /srv/www 内
* /usr：应用程序存放目录
  * /usr/bin：存放应用程序
  * /usr/share：存放共享数据
  * /usr/lib：存放不能直接运行的，却是许多程序运行所必需的一些函数库文件
  * /usr/local：存放软件升级包
  * /usr/share/doc：系统说明文件存放目录
  * /usr/share/man：程序说明文件存放目录
* /var：放置系统执行过程中经常变化的文件
  * /var/log：随时更改的日志文件 
  * /var/spool/mail：邮件存放的目录
  * /var/run：程序或服务启动后，其 PID 存放在该目录下

## 6. 终端命令

### 6.1 学习终端命令的原因

在真实的工作场景中, Linux 服务器是不会安装图形界面的, 维护人员都是通过远程链接的方式链接到服务器系统, 使用**命令**的方式对系统进行维护, 所以我们要掌握一些 Linux 系统的操作命令, 如 **磁盘操作**、**文件存取**、**目录操作**、**进程管理**、**文件权限** 设定等。

Linux 发行版本的命令大概有 200 多个, 但是常用的命令只有 10 多个而已, 对于常用命令不需要死记硬背, 用的多了自然就记住了, 不要尝试一次学会所有的命令，有些命令是非常不常用的，临时遇到，临时百度就可以

![](/img/frontend/linux/imimages/02.jpg
### 6.2 常用的基本命令

| 序号 | 命令           | 对应英文             | 作用                   |
| ---- | -------------- | -------------------- | ---------------------- |
| 01   | ls             | list                 | 查看当前文件夹下的内容 |
| 02   | pwd            | print work directory | 查看当前所在工作目录   |
| 03   | cd [目录名]    | change directory     | 切换目录               |
| 04   | touch [文件名] | touch                | 新建文件               |
| 05   | mkdir [目录名] | make directory       | 创建目录               |
| 06   | rm [文件名]    | remove               | 删除指定名称的文件     |
| 07   | clear          | clear                | 清屏                   |

`ctrl + shift + = ` **放大**终端窗口的字体显示

`ctrl + - ` **缩小**终端窗口的字体显示

### 6.3 终端命令格式

```bash
command [-options] [parameter]
```

`command`：命令名称，相应功能的英文单词或单词的缩写

`-options`：选项，可用来对命令进行控制，也可以省略

`parameter`：传给命令的参数，可以是 **零个**、**一个** 或者 **多个**

`[]` 代表可选 

### 6.4 查阅命令帮助信息

1. 查看命令的简要帮助信息

   ```bash
   command --help
   ```

2. 查询命令的详细帮助信息

   ```bash
   man command
   ```

   `man` 是 **manual** 的缩写, 是 Linux 提供的一个**手册**, 包含了绝大部分命令、函数的详细使用说明

   | 操作键    | 功能                       |
   | --------- | -------------------------- |
   | 空格键、f | 显示手册的下一页           |
   | Enter 键  | 按一次手册内容向下滚动一行 |
   | b         | 显示手册的上一页           |
   | q         | 退出手册                   |

### 6.5 终端使用技巧

#### 1. 自动补全

在敲出 `文件`／`目录`／`命令` 的前几个字母之后按下 `tab` 键, 如果输入的没有歧义, 系统会自动补全

如果还存在其他相似的 `文件`／`目录`／`命令`的话，再按一下 `tab` 键，系统会提示可能存在的命令

![](/img/frontend/linux/imimages/30.png
#### 2. 曾经使用过的命令

按 `上`／`下` 光标键可以在曾经使用过的命令之间来回切换

如果想要退出选择，并且不想执行当前选中的命令，可以按 `ctrl + c`

## 7. 文件和目录常用命令

### 7.1 查看目录内容

#### 7.1.1 ls 命令说明

`ls` 是英文单词 **list** 的简写, 其功能为列出当前工作目录中的内容, 是 linux 用户最常用的命令之一, 类似于 **DOS** 下的 `dir` 命令。

#### 7.1.2 ls 常用选项

| 参数 | 含义                                             |
| ---- | ------------------------------------------------ |
| -a   | 显示当前工作目录下的所有目录和文件, 包括隐藏文件 |
| -l   | 以列表方式显示文件的详细信息                     |
| -h   | 和 -l 配合使用以人性化的方式显示文件大小         |
| -p   | 对目录附加"/"作为指示符号                        |

在 linux 中, 以 . 开头的文件为隐藏文件, 以 . 开头的文件夹为隐藏文件夹, 若要查看隐藏文件需要在 ls 命令的后面加 `-a` 参数。

在 linux 中, **.** 代表当前目录, **..** 代表上一级目录。

命令选项可以分开指定也可以一起指定且顺序不会影响执行结果。

`ls -lap` 命令可以使用 `ll` 命令代替, 所以以上命令可以使用 `ll -h` 代替。

`ls` 命令可以传递目录作为参数, 表示查看特定目录中的文件和目录。

`ls` 命令可以传递文件作为参数, 表示查看特定文件的属性内容。

#### 7.1.3 ls 联合通配符

| 通配符 | 含义                                                     |
| ------ | -------------------------------------------------------- |
| *      | 代表任意个数的字符, 可以有可以没有, 可以有一个可以有多个 |
| ?      | 代表任意一个字符, 必须有且只能有一个                     |
| [abc]  | 匹配 a、b、c 中的任意一个字符                            |
| [a-f]  | 匹配从 a 到 f 范围内的的任意一个字符                     |

### 7.2 切换目录

#### 7.2.1 cd 

`cd` 是英文单词 **change directory** 的简写, 其功能是更改当前的工作目录, 是 linux 用户最常用的命令之一。

注意：Linux 系统中所有的 **目录** 和 **文件名** 都是大小写敏感的

| 命令  | 含义                                   |
| ----- | -------------------------------------- |
| cd    | 切换到当前用户的家目录(/home/用户目录) |
| cd ~  | 切换到当前用户的家目录(/home/用户目录) |
| cd .. | 切换到上级目录                         |
| cd -  | 可以在最近两次工作目录之间来回切换     |

#### 7.2.2 相对路径和绝对路径

**相对路径**: 在输入路径时，最前面不是 **/** 或者 **~**，表示相对 **当前目录** 所在的目录位置

**绝对路径**: 在输入路径时，最前面是 **/** 或者 **~**，表示从 **根目录/家目录** 开始的具体目录位置

### 7.3 创建和删除操作

#### 7.3.1 touch

如果文件 **不存在**, 创建一个空白文件

如果文件 **已经存在**, 更新文件的最新修改日期为当前时间

#### 7.3.2 mkdir

| 选项 | 含义             |
| ---- | ---------------- |
| -p   | 可以递归创建目录 |

#### 7.3.3 rm

删除文件或目录

| 选项 | 含义                                 |
| ---- | ------------------------------------ |
| -d   | 删除空目录                           |
| -r   | 递归地删除非空目录                   |
| -f   | 强制删除，忽略不存在的文件，无需提示 |

### 7.4 拷贝和移动文件

#### 7.4.1 cp

`cp` 命令的功能是将给出的 **文件** 或 **目录** 复制到另一个 **文件** 或 **目录** 中。

|命令               | 对应英文 | 作用                                 |
| ------------------ | -------- | ------------------------------------ |
| cp 源文件 目标文件 | copy     | 复制文件或者目录                     |

| 选项 | 含义                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------- |
| -i   | 覆盖文件前提示                                                                                 |
| -r   | 若给出的源文件是目录文件，则 cp 将递归复制该目录下的所有子目录和文件, 目标文件必须为一个目录名 |

#### 7.4.2 mv

`mv` 命令可以用来移动文件或目录, 也可以为文件或目录重命名。

| 命令               | 对应英文 | 作用                                 |
| ---------------------- | -------- | ------------------------------------ |
| mv 源文件 目标文件 | move     | 移动文件或者目录／文件或者目录重命名 |

| 选项 | 含义           |
| ---- | -------------- |
| -i   | 覆盖文件前提示 |

### 7.5 查看文件内容

| 序号 | 命令                 | 对应英文    | 作用                                                 |
| ---- | -------------------- | ----------- | ---------------------------------------------------- |
| 01   | cat 文件名           | concatenate | 查看文件内容、创建文件、文件合并、追加文件内容等功能 |
| 02   | more 文件名          | more        | 分屏显示文件内容                                     |
| 03   | grep 搜索文本 文件名 | grep        | 搜索文本文件内容                                     |

#### 5.1 cat

`cat` 命令用来 **查看文件内容**, 它会一次显示所有的内容，适合 **查看内容较少** 的文本文件。

| 选项 | 含义                   |
| ---- | ---------------------- |
| -b   | 对于非空行内容输出编号 |
| -n   | 对于所有行内容输出编号 |

#### 5.2 more

`more` 命令用来分屏显示文件内容, 每次只显示一页内容, 适合于 **查看内容较多** 的文本文件。

使用 `more` 的操作键：

| 操作键   | 功能           |
| -------- | -------------- |
| 空格键   | 显示下一屏内容 |
| Enter 键 | 一次滚动一行   |
| b        | 显示上一屏内容 |
| q        | 退出           |

#### 5.3 grep

`grep` 命令用于在指定的文件中查找指定的文本。

| 选项 | 含义                       |
| ---- | -------------------------- |
| -i   | 忽略大小写                 |
| -v   | 显示不包含匹配文本的所有行 |
| -n   | 显示行号                   |

常用的两种模式查找

| 参数 | 含义                         |
| ---- | ---------------------------- |
| ^a   | 行首，搜寻以 **a** 开头的行  |
| ke$  | 行尾，搜寻以 **ke** 结束的行 |

### 7.6 其他命令

#### 7.6.1 echo

`echo` 表示输出, 命令后面写什么就将什么内容输出到命令行中, 通常会和 **重定向** 联合使用

#### 7.6.2 重定向 `>` 和 `>>`

Linux 允许将命令执行结果 **重定向** 到一个 **文件, 将本应显示在**终端上的内容 **输出／追加** 到**指定文件中**

`>` 表示输出，会覆盖文件中原有的内容

`>>` 表示追加，会将内容追加到已有文件的末尾

#### 7.6.3 管道 `|`

通过管道可以将 **一个命令的输出** 做为 **另一个命令的输入**。

可以理解现实生活中的管子，管子的一头塞东西进去，另一头取出来，这里 `|` 的左右分为两端，左端塞东西（写），右端取东西（读）

常用的管道命令有:

`more`：分屏显示内容, `ll | more`

`grep`：在命令执行结果的基础上过滤指定的文本

| 选项 | 含义                                               | 示例                        |
| ---- | -------------------------------------------------- | --------------------------- |
| -A   | 输出匹配行内容及该行内容后面的指定数量的行数内容   | cat demo.txt \| grep e -A 2 |
| -B   | 输出匹配行内容及该行内容前面的指定数量的行数内容   | cat demo.txt \| grep e -B 2 |
| -C   | 输出匹配行内容及该行内容前后面的指定数量的行数内容 | cat demo.txt \| grep f -C 2 |
| -i   | 过滤文本时忽略大小写                               | cat demo.txt \| grep w -i   |

单独使用 `grep` 命令: `grep -i 'hello world' demo.txt`

## 8. 远程管理

### 8.1 关机和重启

`shutdown` 命令可以 **关闭** 或者 **重新启动** 操作系统。

| 序号 | 命令               | 对应英文 | 作用           |
| ---- | ------------------ | -------- | -------------- |
| 01   | shutdown 选项 时间 | shutdown | 关机／重新启动 |

| 选项 | 含义     |
| ---- | -------- |
| -r   | 重新启动 |

**不指定选项和参数**，默认 **1分钟** 之后 **关闭系统**, 远程维护服务器时, 最好不要关闭系统, 而应该重新启动系统。

```bash
# 立刻关机，其中 now 表示现在
$ shutdown now

# 重新启动操作系统, 其中 now 表示现在
$ shutdown -r now

# 系统在今天的 20:25 会关机
$ shutdown 20:25

# 系统再过十分钟后自动关机
$ shutdown +10

# 取消之前指定的关机计划
$ shutdown -c
```

### 8.2 IP地址

在 linux 系统中, 可以通过 `ip addr` 命令查看本机使用的 ip 地址, 可以通过 `ping` 命令检查本机是否可以与指定主机进行通信。

```bash
# 查看本机使用的 ip 地址
$ ip addr
```

```bash
# 检测到目标主机是否连接正常
$ ping IP地址

# 检测本地网卡工作正常
$ ping 127.0.0.1
```

`ping` 一般用于检测当前计算机到目标计算机之间的网络 **是否通畅**, **数值越, 速度越慢**。

原理：网络上的机器都有 **唯一确定的 IP 地址**，我们给**目标 IP 地址**发送一个数据包，对方就要返回一个数据包，根据返回的数据包以及时间，我们可以确定目标主机的存在。

提示: 在 Linux 中, 想要终止一个终端程序的执行, 绝大多数都可以使用 `CTRL + C`。

### 8.3 远程登录

#### 8.3.1 SSH 介绍

SSH 是 Secure Shell 的缩写, 是建立在应用层基础上的网络安全协议。

利用 `SSH 协议` 可以有效**防止远程管理过程中的信息泄露**。

`SSH` 协议的另一项优点是传输的数据可以是经过压缩的, 所以可以加快传输的速。



![](/img/frontend/linux/imimages/31.png


要使用此协议需要在服务器系统和客户端系统安装对应的 SSH 软件。

#### 8.3.2 ip和端口号

ip: 接入网络的设备的唯一标识, 网络中的其他设备可以通过该标识进行通信。

**端口号:** 通过 IP 地址可以找到网络中的计算机, 通过端口号可以进一步找到计算中提供服务的应用程序。

**常见端口号列表:**

| 服务       | 端口号 |
| ---------- | ------ |
| SSH 服务器 | 22     |
| Web 服务器 | 80     |
| HTTPS      | 443    |
| FTP 服务器 | 21     |

#### 8.3.3 SSH 远程登录

Ubuntu 安装 ssh:

```bash
sudo apt-get install openssh-server openssh-client
```

客户端连接 Ubuntu:

```bash
ssh [-p port] user@remote
ssh -p 22 mongoose@192.168.181.129
```

`user` 是在远程机器上的用户名, 如果不指定的话默认为当前系统用户名称

`remote` 是远程机器的地址, 可以是 **IP**／**域名**, 或者是 **后面会提到的别名**

`port` 是 **SSH Server 监听的端口**，如果不指定，就为默认值 `22`

提示一: 使用 `exit` 命令退出当前用户的登录

提示二: 在工作中, SSH 服务器的端口号可能**不是 22**, 此时就需要使用 `-p` 选项, 指定正确的端口号

#### 8.3.4 scp 远程拷贝

scp 就是 `secure copy`，scp 命令的作用是进行 **远程文件拷贝**。

![](/img/frontend/linux/imimages/32.png
```bash
# 把本机当前目录下的 b.txt 文件 复制到 ubuntu 系统 mongoose 用户的桌面文件夹下
# 注意: `:` 后面的路径如果不是绝对路径, 则以用户的家目录作为参照路径
scp -P 22 b.txt mongose@192.168.181.129:桌面
```

```bash
# 将 ubuntu 系统中mongoose用户桌面文件夹中的 a.txt 文件拷贝到本机系统的当前文件夹下
scp -P 22 mongoose@192.168.181.129:桌面/a.txt . 
```

```bash
# 加上 -r 选项可以拷贝文件夹
# 将 ubuntu 系统中 mongoose 用户的桌面文件夹拷贝到本机系统的当前文件夹下的 demo 文件夹下
scp -P 22 -r mongoose@192.168.181.129:桌面 ./demo
```

| 选项 | 含义                                                                                            |
| ---- | ----------------------------------------------------------------------------------------------- |
| -r   | 若给出的源文件是目录文件, 则 scp 将递归复制该目录下的所有子目录和文件, 目标文件必须为一个目录名 |
| -P   | 若远程 SSH 服务器的端口不是 22, 需要使用大写字母 -P 选项指定端口                                |

#### 8.3.5 SSH 免密登录

提示: 和 SSH 相关的配置文件都保存在用户家目录下的 `.ssh` 目录下

第一步: 在本机通过 `ssh-keygen` 命令生成 SSH 的公钥和私钥。

第二步: 在本地通过 `ssh-copy-id [-p port] [-i id_rsa.pub] user@remote` 命令将公钥传递到目标主机。

注意: windows 系统中没有 `ssh-copy-id` 命令. windows 系统需要先通过 SSH 远程登录到 Ubuntu, 然后通过以下命令手动将公钥添加到 .ssh/authorized_keys 文件中。

```bash
# 切换到 .ssh 目录执行以下命令将公钥文件拷贝到 Ubuuntu
scp id_rsa.pub mongoose@192.168.181.129:~/桌面
# 在 Ubuntu 系统的桌面目录下执行以下命令通过系统自带编辑器打开公钥文件
gedit id_rsa.pub
# 手动拷贝文件内容, 然后在终端中执行以下命令将公钥内容追加到 authorized_keys 文件中
echo 'long_line_with_contents_of_public_key_file' >> ~/.ssh/authorized_keys
```

![](/img/frontend/linux/imimages/33.png)


非对称加密算法: 使用 **公钥** 加密的数据，需要使用 **私钥** 解密, 使用 **私钥** 加密的数据，需要使用 **公钥** 解密。

免密登录配置成功以后在使用 `scp` 命令进行远程文件拷贝时也不需要输入密码了。

#### 8.3.6 远程主机地址别名

在每次连接远程主机时都需要重复输入端口号, 远程主机用户名称, 远程主机 IP 地址, 非常的繁琐且不好记忆, 我们可以为远程主机地址设置别名, 然后每次连接远程主机时使用别名, 这样的话, 连接远程主机的命令就会变得异常简洁, 比如 `ssh ubuntu`。

在本机的 `~/.ssh/config` 文件中添加以下内容: 

```
Host ubuntu
	HostName 192.168.181.129
	User mongoose
  Port 22
```

### 8.4 防火墙

Linux 系统中原始的防火墙配置工具是 iptables, 但是使用过程比较繁琐, 所以 Ubuntu 提供了一个基于 iptables 的防火墙工具 ufw。

ufw 是 Uncomplicated Firewal 单词的缩写, 意思是简单的防火墙, 目标是简化配置防火墙的过程。

ufw 默认是关闭状态, 一旦开启, 默认拒绝所有传入链接, 但允许所有传出链接。

```bash
# 查看防火墙状态: 激活就是开启, 不活动就是关闭
sudo ufw status
# 开启防火墙
sudo ufw enable
# 关闭防火墙
sudo ufw disable
```

防火墙一旦开启, 意味着 ssh 连接将失败。

```bash
# 查看系统中有哪些软件包可以向外提供服务
sudo ufw app list
# 将 ssh 提供的服务添加到防火墙允许的列表中
sudo ufw allow "OpenSSH"
sudo ufw allow 22
```

```bash
# 查看防火墙状态并显示规则编号
sudo ufw status numbered
# 删除防火墙规则
sudo ufw delete 编号
```

```bash
# 重置防火墙
sudo ufw reset
```

### 8.5 静态IP

#### 8.5.1 准备工作

查看宿主主机的网关地址和可设置的静态IP地址范围。



##### 1. Windows

![](/img/frontend/linux/static_ip_windows/1.png)

![](/img/frontend/linux/static_ip_windows/2.png)

![](/img/frontend/linux/static_ip_windows/3.png)

![](/img/frontend/linux/static_ip_windows/4.png)

![](/img/frontend/linux/static_ip_windows/5.png)

![](/img/frontend/linux/static_ip_windows/6.png)

![](/img/frontend/linux/static_ip_windows/7.png)

![](/img/frontend/linux/static_ip_windows/8.png)

##### 2. MacOs

通过 Mac 终端进入VMware Fusion的 vmnet8 目录

```bash
cd /Library/Preferences/VMware\ Fusion/vmnet8
```

通过 nat.config 配置文件查看本机网关地址和子网掩码

```bash
cat nat.conf
```

找到如下内容:

```bash
# NAT gateway address
# 本机网关地址
ip = 192.168.181.2
```

查看 dhcpd.conf 文件内容, 查询虚拟机允许选择的静态ip地址范围

```bash
cat dhcpd.conf
```

找到如下内容

```bash
subnet 192.168.181.0 netmask 255.255.255.0 {
	range 192.168.181.128 192.168.181.254;
}
```

rang -> 虚拟机允许选择的静态ip地址范围，自定义的静态ip地址必须要在这个范围内

#### 8.5.2 设置静态 IP

![](/img/frontend/linux/static_ip_windows/9.png)

![](/img/frontend/linux/static_ip_windows/10.png)

![](/img/frontend/linux/static_ip_windows/11.png)

![](/img/frontend/linux/static_ip_windows/12.png)

```bash
network:
  version: 2
  renderer: NetworkManager
  ethernets:
    ens33:                      #网卡名, 以Ubuntu操作系统的网卡名称为准
      dhcp4: no                 #ipv4关闭dhcp, 用static模式
      dhcp6: no                 #ip6关闭dhcp
      addresses:
        - 192.168.172.10/24     #本机IP地址
      gateway4: 192.168.172.2   #vmware网关的的IP地址
      nameservers:              #DNS服务器
        addresses: [114.114.114.114, 8.8.8.8, 1.1.1.1]
```

![](/img/frontend/linux/static_ip_windows/13.png)

## 9. 用户和权限

### 9.1 用户管理

#### 9.1.1 创建/设置密码/删除

| 命令                          | 作用         | 说明                                                 |
| ----------------------------- | ------------ | ---------------------------------------------------- |
| useradd -m 用户名             | 添加新用户   | -m 自动创建用户家目录                                |
| passwd 用户名                 | 设置用户密码 | 如果是普通用户, 直接用 passwd 可以修改自己的账户密码 |
| userdel -r 用户名             | 删除用户     | -r 选项会自动删除用户家目录                          |

创建用户时, 如果忘记添加 `-m` 选项, 最简单的方法就是**删除用户, 重新创建**。

创建用户时, 默认会创建一个和**用户名**同名的**组名**。

用户信息保存在 `/etc/passwd` 文件中。

`/etc/passwd` 文件存放的是用户的信息, 由 6 个分号组成的 7 个信息分别是

1. 用户名
2. 密码（x，表示加密的密码）
3. UID（用户标识）
4. GID（组标识）
5. 用户全名或本地帐号
6. 家目录
7. 登录使用的 Shell, 就是登录之后使用的终端 sh 或 bash, 普通用户默认使用 sh, root 用户默认使用 bash.

#### 9.1.2  用户信息

##### 1. uid 概述

在 Linux 系统中, 每个用户都会有 uid, uid 表示的是用户 id, Linux 系统使用 uid 识别用户。

Linux 系统中的 uid 和用户名是对应的关系, 该对应关系被存储在 `/etc/passwd` 文件中。

在使用用户名登录 Linux 系统时, 系统会在 `/etc/passwd` 文件中查找用户名和 uid 的对应关系, 从而确定当前系统中是否存在该用户。

Linux 系统中使用 uid 记录文件的所属者, 在查看文件所属者时系统会在 `/etc/passwd` 文件中查找用户名和 uid 的对应关系, 然后将用户名显示出来。如果查找不到就将 uid 显示出来, 比如通过网络下载到本地的文件。

说白了用户名其实并无实际作用, 仅是为了方便用户记忆而已。

##### 2. gid 概述

在 Linux 系统中, 每个用户都会有 gid, gid 表示的是用户所属组的 id, Linux 系统使用 gid 识别用户属于哪一个用户组。

Linux 系统中的 gid 和组名称是对应的关系, 该对应关系被存储在 `/etc/group` 文件中。

Linux 系统中使用 gid 记录文件的所属组, 在查看文件所属组时系统仍然会在 `/etc/group` 文件中查找组名称和 gid 的对应关系, 然后将用户组名称显示出来。

##### 3. 查看用户信息

| 命令        |                         作用                         |
| ----------- | :--------------------------------------------------: |
| id [用户名] | 查看用户 UID 和 GID 信息, 不传递用户默认就是当前用户 |
| who         |            查看当前所有登录系统的用户列表            |
| whoami      |               查看当前登录用户的账户名               |

| 命令                           | 作用         | 说明                                            |
| ------------------------------ | ------------ | ----------------------------------------------- |
| cat /etc/passwd \| grep 用户名 | 确认用户信息 | 新建用户后，用户信息会保存在 /etc/passwd 文件中 |

```bash
# 查看 zhangsan 用户的 uid 和 gid
id zhangsan
# 查看张三的用户信息
cat -n /etc/passwd | grep zhangsan
# 查看 develop 组信息
cat -n /etc/group | grep develop
```

#### 9.1.3 超级用户

##### 1. 概述

在 Linux 系统中, `root` 账号通常**用于系统的维护和管理**, 对操作系统中的所有资源**具有所有权限**。

在大多数版本的 Linux 中都不推荐**直接使用 root 账号登录系统**, 避免因权限过大对系统造成破坏。

在 Linux 系统的安装过程中, 系统会要求我们创建一个标准的用户账号, 推荐我们使用**标准用户账号**进行登录。

##### 2. sudo 命令

`sudo` 命令用于使用其他用户身份执行命令, 预设的用户身份为 `root` 用户。

`su` 是 `substitute user` 的缩写，表示 **使用另一个用户的身份**。

普通用户使用 `sudo` 命令时, 必须先输入当前用户的系统登录密码, 之后有 **5 分钟的有效期限**, 超过期限必须重新输入密码。

#### 9.1.4 切换用户

| 命令        | 作用                               | 说明                                     |
| ----------- | ---------------------------------- | ---------------------------------------- |
| su - 用户名 | 切换用户, 并且切换至该用户的家目录 | - 可以切换到用户家目录, 否则保持位置不变 |
| exit        | 退出当前登录账户                   |                                          |

`su` 命令不传递用户名, 默认是 `root`。

![](/img/frontend/linux/imimages/35.png)
如果当前用户是超级管理员, 切换到普通用户不需要输入密码。

从一个普通用户切换到另一个普通用户, 需要输入密码。

临时切换到另外一个账号执行一条命令，命令执行完成后立即切换回当前账号。

```sh
# -c command
su root -c ls
```



### 9.2 组管理

为了方便为用户授权, **用户组** 的概念应用而生，如下图所示:

![](/img/frontend/linux/imimages/34.png)
在实际应用中, 可以预先针对 **用户组** 设置权限，然后 **将不同的用户添加到对应的组中**, 从而**不用依次为每一个用户设置权限**。

| 命令           | 作用       |
| -------------- | ---------- |
| groupadd 组名  | 添加组     |
| groupdel 组名  | 删除组     |
| cat /etc/group | 查看组信息 |

**创建组** / **删除组** 的终端命令都需要通过 `sudo` 命令执行。

### 9.3 用户组管理

#### 9.3.1 主组/附加组

##### 1. 主组

主组是用户登录系统时所使用的组, 用户有且只能有一个主组。

在创建新用户时, 若未明确指定该用户所属的主组, 系统会默认创建一个与用户名相同的组作为该用户的主组。

在创建文件时, 该文件的所属者就是当前用户, 该文件的所属组就是当前用户的主组。

用户被删除时他的主组若没有其他用户, 系统会自动删除该组。

主组信息可以通过 `/etc/passwd` 文件的第4列中查看。

```sh
# 修改用户的主组
usermod -g 组名 用户名
```

##### 2. 附加组

在 Linux 系统中, 一个用户可以所属多个组, 除主组外, 其他组都属于该用户的附加组。

Linux 系统通过给用户添加附加组的方式为用户附加其他权限。

用户被删除时所属加属组不会受影响。

附加组信息可以通过 `/etc/group` 文件中的最后一列中查看。

```sh
# 将zhangsan用户添加到design组
gpasswd -a zhangsan design
```

##### 3. 查看用户所属组

```bash
# 查看用户所属组
groups zhangsan
```

设置了用户的附加组之后, 该用户需要重新登录才能生效。

默认使用 `useradd` 添加的用户是不能通过 `sudo` 命令以管理员身份执行命令的, 因为该用户还没有被添加到管理员组(sudo组)中。

##### 4. 将用户从组中删除

```bash
# 将张三从sudo组中移除
gpasswd -d zhangsan sudo
```

#### 9.3.2 shell

##### 1. 什么是 shell

shell 叫做命令解释器, 俗称终端, 它的作用是将用户指令翻译为计算机能够识别的语言, 并将指令执行的结果返回给用户。

在 linux 系统中存在多种版本的命令解释器, 就像在 windows 操作系统中既存在 `cmd`, 也存在 `powershell` 一样, 在 linux 系统中可以通过 `/etc/shells` 进行查看当前系统中有哪些命令解释器。

```bash
cat /etc/shells
```

可以通过以下命令查看当前登录用户所使用的命令解释器是什么。

```basnh
echo $SHELL
```

也可以通过 `/etc/passwd` 文件查看当前用户所使用的命令解释器是什么。

```bash
# /bin/bash
cat /etc/passwd | grep mongoose
```

```bash
# /bin/sh
cat /ect/passwd | grep zhangsan
```

##### 2. 更改用户 shell

```bash
# 修改用户登录 Shell
usermod -s /bin/bash zhangsan
```

### 9.4 权限管理

#### 9.4.1 概述

所谓权限管理, 其实就是指对不同的用户, 设置不同的文件访问权限, 包括对文件的读、写、删除等。

比如非 root 用户, 他们只有在自己的家目录下才具有写权限, 而在家目录之外, 只具有访问和读权限。

|  权限  |  英文  | 缩写  | 数字代号 |
| :----: | :----: | :---: | :------: |
|  可读  |  read  |   r   |    4     |
|  可写  | write  |   w   |    2     |
| 可执行 | excute |   x   |    1     |

`ls -l` 可以查看文件夹下文件的详细信息，从左到右依次是：

* **权限**: 第 1 个字符如果是 `d` 表示目录
* **硬链接数**: 通俗地讲，就是有多少种方式可以访问到当前目录或者文件
* **拥有者**: 家目录下文件或者目录的拥有者通常都是当前用户
* **用户组**: 当前文件或目录的拥有者的所属组
* **大小**
* **时间**
* **名称**

硬连接数实验: 在当前用户的桌面文件夹下新建 test.txt 文本文件, 新建 test 文件夹, 分别查看它们的硬链接数。

通过查看我们发现, 文本文件的硬链接数是1, 文件夹的硬连接数是2, 为什么?

```sh
# 文本文件
cat /home/mongoose/桌面/test.txt
# 文件夹的第一种访问方式
cd /home/mongoose/桌面/test
# 文件夹的第二种访问方式, 前提是当前已经在目标文件夹中
cd .
```

在 test 文件夹下新建文件夹 a 和 b, 再次查看 test 文件夹的硬链接数。

通过查看我们发现, test 文件夹的硬链接数变成了4, 为什么?

```sh
# 文件夹的第三种方式方式, 前提是当前的工作目录是 a
cd ../
# 文件夹的第四种方式方式, 前提是当前的工作目录是 b
cd ../
```

#### 9.4.2 修改权限

| 命令  | 作用       |
| ----- | ---------- |
| chown | 修改所属者 |
| chgrp | 修改所属组 |
| chmod | 修改权限   |

```bash
# 修改文件|目录的拥有者
chown 用户名 文件|目录
# 递归修改文件|目录的组
chgrp -R 组名 文件|目录
```

`chmod` 命令可以修改 用户/组/其他人, 对文件/目录的权限。

```bash
# 修改文件权限, 使用三个数字分别对应 拥有者/组/其他 用户的权限
chmod 755 文件
# 递归修改
chmod -R 755 目录

# 为文件或文件夹的所属者增加或减少权限
chmod u+/-rwx 文件名|目录名
# 为文件或文件夹的所属组增加或减少权限
chmod g+/-rwx 文件名|目录名
# 为文件或文件夹的其他人增加或减少权限
chmod o+/-rwx 文件名|目录名
```

```bash
# 查看文件并返回文件的绝对路径
which node
# 执行 test.js 文件
./test.js
```

在命令行中执行test.js 文件时系统并不知道使用什么程序执行它, 可以在文件顶部通过以下命令指定运行文件的程序

```bash
#!/usr/bin/node
```

![](/img/frontend/linux/imimages/36.png)
常见数字组合有（`u`表示用户／`g`表示组／`o`表示其他）：

`777` ===> `u=rwx,g=rwx,o=rwx` 

`755` ===> `u=rwx,g=rx,o=rx`

`644` ===> `u=rw,g=r,o=r`

目标: 

1. 将 `01.js` 的权限修改为 `u=rwx,g=rx,o=r` 
2. 将 `123.txt` 的权限修改为 `u=rw,g=r,o=-` 
3. 将 `test` 目录以及目录下的 **所有** 文件权限修改为 `u=rwx,g=rwx,o=rx` 

## 10. 系统信息

### 10.1 日期和时间

| 命令        | 作用     |                                                              |
| ----------- | -------- | ------------------------------------------------------------ |
| timedatectl | 查看时间 | UTC(世界标准时间) CST(中国标准时间) 在时区划分上属东八区 RTC(硬件时钟) |

RTC in local TZ: no表示硬件时钟设置为世界标准时间, yes表示硬件时钟设置为本地时间

System clock synchronized: 如果和远程NTP服务器成功同步, 显示为yes

NTP service: 是否开启时间同步服务, active 表示同步时间, inactive 表示不与服务器同步时间

```sh
# 开启 ntp 服务器同步时间
timedatectl set-ntp true
# 关闭 ntp 服务器同步时间
timedatectl set-ntp false
# 设置时间, 设置时间的前提是关闭 ntp 服务
imedatectl set-time "2030-05-20 12:45:24"
# 查看所有可用时区
timedatectl list-timezones
# 设置时区
timedatectl set-timezone "Asia/Shanghai"
```





| 命令 | 作用                                                 |
| ---- | ---------------------------------------------------- |
| date | 查看系统时间                                         |
| cal  | `calendar` 查看本月日历，`-y` 选项可以查看一年的日历 |

### 10.2 进程信息

所谓 **进程**, 通俗地说就是 **当前正在执行的一个程序**。

#### 10.3.1 ps

查看进程信息, ps 是 process status 的简写。

| 选项 | 含义                                               |
| ---- | -------------------------------------------------- |
| a    | 显示通过终端启动的所有进程, 包括其他用户启动的进程 |
| u    | 显示进程的详细信息                                 |
| x    | 显示没有通过终端命令启动的进程                     |

#### 10.3.2 top

实时显示运行中的进程信息并且排序。

要退出 `top` 命令需要输入 `q`。

#### 10.3.3 kill

终止指定代号的进程，`-9` 表示强行终止。

| 选项 | 含义         |
| ---- | ------------ |
| -9   | 表示强行终止 |

使用 `kill` 命令时, 最好只终止由当前用户开启的进程, 不要终止由 `root` 用户开启的进程, 否则可能导致系统崩溃。

## 11. 其他命令

### 11.1 查找文件 find

find 命令用来在 **特定的目录下搜索** 符合条件的文件。

| 命令                      | 作用                                             |
| ------------------------- | ------------------------------------------------ |
| find [路径] -name "*.txt" | 查找指定路径下扩展名是 `.txt` 的文件, 包括子目录 |

如果省略路径, 表示在当前文件夹下查找。

### 11.2 链接 ln

#### 11.2.1 软链接

| 命令                          | 作用                                        |
| ----------------------------- | ------------------------------------------- |
| ln -s 被链接的源文件 链接文件 | 建立文件的软链接, 类似于Windows下的快捷方式 |

1. 在桌面文件夹下创建a.js, 在当前位置创建该文件的软链接b.js(源文件路径采用相对路径)

2. 将 a.js 文件移动到下载文件夹下, 查看 b.js 软链接是否可用

3. 将 a.js 重新移动回桌面文件夹, 在当前位置创建该文件的软件界b.js(源文件路径采用绝对路径)

4. 将 a.js 文件移动到下载文件夹下, 查看 b.js 软链接是否可用

5. 删除 a.js 文件, 查看 b.js软链接是否可用

结论一: 被链接的源文件要使用绝对路径, 当软链接的位置发生变化后,  软链接仍然能够正常使用。

结论二: 当源文件被删除后, 软链接失效。

#### 11.2.2 硬链接

| 命令                       | 作用             |
| -------------------------- | ---------------- |
| ln 被链接的源文件 链接文件 | 建立文件的硬链接 |

1. 在桌面文件夹下创建a.js, 在当前位置创建该文件的硬链接b.js(源文件路径既可以是相对路径也可以是绝对路径)
1. 将 a.js 移动到下载文件夹中, 查看 b.js 硬链接是否可用
1. 删除 a.js, 查看 b.js 硬链接是否可用

结论一: 被链接的源文件移动位置后, 硬链接仍然有效。

结论二: 当源文件被删除后, 硬链接依然有效，因为删除的并不是真的源文件，原因入下图。

在 Linux 系统中, 文件名和文件数据是分开存储的。

![](/img/frontend/linux/imimages/37.png)
### 11.3 打包解包 tar

`tar` 是 Linux 系统中最常用的备份工具, 它可以把一系列文件归档(打包)到一个文件中, 也可以把一个归档文件恢复成一系列文件。

使用 tar 命令归档的文件, 文件后缀名为 `.tar`。

```bash
# 打包文件
tar -cvf 归档文件名称.tar 被归档的文件列表...

# 解包文件
tar -xvf 归档文件名称.tar
```

| 选项 | 含义                                                                           |
| ---- | ------------------------------------------------------------------------------ |
| c    | create, 创建归档文件                                                           |
| v    | verbose, 详细的列出归档了哪些文件                                              |
| f    | file, 指定归档文件名称, f 选项后面一定是 .tar 文件名称，所以该选项必须放在最后 |
| x    | extract,  从归档中解出文件 (解包)                                              |

练习目标:

1. 在桌面文件夹下新建三个空白文件 `01.js`、`02.js`、`03.js`
2. 将这三个文件归档打成 `javascript.tar` 包
3. 新建 `tar` 目录，并且将 `javascript.tar` 包移动到 `tar` 目录下
4. 解包 `javascript.tar`

### 11.4 压缩解压缩

#### 11.4.1 gzip

`gzip` 是 Linux 系统中用来对文件进行压缩和解压缩的命令, 通过此命令压缩得到的新文件, 其扩展名通常标记为“.gz”。

```bash
# 压缩
gzip 被压缩文件名称

# 解压缩
gzip -d 被压缩文件名称.gz
```

`gzip` 命令只能压缩文件不能打包文件, 比如将多个文件作为参数, 命令的执行结果就是分别对多个文件进行压缩产生多个文件的压缩结果。

在 `tar` 命令中有一个选项 **-z** 可以调用 `gzip` 命令, 从而可以方便的实现先打包再压缩的或者先解压缩再解包的过程。

```bash
# 压缩文件
tar -zcvf 打包文件名称.tar.gz 被压缩的文件列表

# 解压缩文件
tar -zxvf 打包文件名称.tar.gz

# 解压缩到指定目录
tar -zxvf 打包文件名称.tar.gz -C 目标目录
```

#### 11.4.2 bzip2

`bzip2` 也是 Linux 系统中经常用来对文件进行压缩和解压缩的命令, 通过此命令压缩得到的新文件, 其扩展名通常标记为“.bz2”。

`bzip2` 与 `gzip` 相比, 其压缩稳定性和效果都更好。

```bash
# 压缩
bzip2 被压缩文件名称

# 解压缩
bzip2 -d 被压缩文件名称.bz2
```

在 `tar` 命令中有一个选项 **-j** 可以调用 `bzip2` 命令, 从而可以方便的实现先打包再压缩的或者先解压缩再解包的过程。

```bash
# 压缩文件
tar -jcvf 打包文件名称.tar.bz2 被压缩的文件列表

# 解压缩文件
tar -jxvf 打包文件名称.tar.bz2
```

### 11.5 软件包管理

#### 11.5.1 apt

##### 1. 基本使用

apt(Advanced Packaging Tool), 是 Linux 下的一款软件包管理工具, 提供了查找、安装、升级、删除软件包的命令。

apt 命令执行需要超级管理员权限(root)。

| 含义                                           | 命令                                         |
| ---------------------------------------------- | -------------------------------------------- |
| 下载安装软件包                                 | sudo apt install <package_name>              |
| 删除软件包                                     | sudo apt remove --auto-remove <package_name> |
| 更新本地软件包数据库, 输出可以更新的软件包数量 | sudo apt update                              |
| 列出可更新的软件包                             | apt list --upgradeable                       |
| 更新所有软件包                                 | sudo apt upgrade                             |

大多数 Linux 都使用本地数据库来存储远程可用的包仓库列表, 所以在安装或升级包之前最好更新一下这个数据库。

sl: 蒸汽汽车动画。

htop: 查看进行信息。

##### 2. 配置软件源

软件源指的是存储软件包的服务器, Ubuntu 官方提供的软件源服务器在国外, 访问速度比较慢。

我们可以将软件源改为国内的服务器, 以此来提升软件包的下载速度。

![](/img/frontend/linux/imimages/38.png)
#### 11.5.2 dpkg

dpkg 命令的英文全称是 `Debian package`, 是 Debian Linux 系统用来安装、创建和管理软件包的实用工具。

dpkg 命令主要是用来安装已经下载到本地的 deb 软件包，或者对已经安装好的软件进行管理。

apt-get 命令是直接从远程的软件仓库里下载安装软件。

| 含义                 | 命令                   |
| -------------------- | ---------------------- |
| 安装 deb 软件包      | dpkg -i <package_name> |
| 删除 deb 软件包      | dpkg -r <package_name> |
| 显示已安装软件包列表 | dpkg -l                |

使用 dpkg 命令安装百度云。

```bash
# 安装软件包
dpkg -i 软件包名称
# 在软件包列表中查找要删除的软件包名称
dpkg -l | grep 软件包名称
# 卸载软件包
dpkg -r 软件包名称
```

## 12. Vim

### 12.1 概述

vim 是 Linux 系统中的一款文本编辑器, 它具有程序编辑能力, 在程序员中被广泛使用。

下载安装vim: `sudo apt install vim`。

![](/img/frontend/linux/images/40.png)

一般模式: 一般模式一般用于浏览文件内容, 也包括一些复制、粘贴、删除等操作。

插入模式: 在一般模式下键入 `i/a/o` 键进入插入模式, 在该模式下可以通过键盘输入内容, 内容输入完成后通过 `esc` 退回一般模式。

底行模式: 在一般模式下通过 `shift + :` 进入底行模式, 在底行模式下可以执行一些 VIM 提供的指令, 比如文件操作, 调用功能等等。

打开或新建文件: `vim filename`

### 12.2 插入模式

在一般模式中使用可以使用下列命令进行插入模式。

| 命令      | 描述                         |
| --------- | ---------------------------- |
| i         | 在光标前插入                 |
| shift + i | 在光标所在行的最前面插入     |
| a         | 在光标后插入                 |
| shift + a | 在光标所在行的最后面插入     |
| o         | 在光标所在行的下一行插入新行 |
| shift + o | 在光标所在行的上一行插入新行 |

### 12.3 复制粘贴

在一般模式中可以使用下列命令执行复制粘贴操作。

| 命令 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| yy   | 复制单行, 将光标移至目标行, 键入yy                           |
| nyy  | 复制多行, 将光标移至起始行, 假设复制两行, 键入2yy            |
| p    | 粘贴, 将光标移至目标行的上一行, 键入p, 在该行的下一行进行粘贴 |

在底行模式下可以使用下列命令执行复制粘贴操作。

| 命令     | 描述                                  |
| -------- | ------------------------------------- |
| n,m co x | 拷贝指定行, 拷贝n至m行, 在x行后面粘贴 |
| n,m m x  | 移动指定行, 移动n至m行, 移动到x行后面 |

### 12.4 定位

在底行模式中, 可以通过以下命令对内容进行定位。

| 命令     | 描述              |
| -------- | ----------------- |
| set nu   | 显示行号          |
| set nonu | 取消行号          |
| 120      | 将光标定位到120行 |

在一般模式下, 可以通过以下命令对内容进行定位。

| 命令      | 描述                 |
| --------- | -------------------- |
| gg        | 定位到文本的第一行   |
| shift + g | 定位到文本的最后一行 |

### 12.5 删除

在一般模式下, 可以通过以下命令对内容进行删除。

| 命令      | 描述                              |
| --------- | --------------------------------- |
| dd        | 删除一行, 删除光标所在行          |
| ndd       | 删除多行, 从光标所在行开始删除n行 |
| shift + d | 删除光标所在处至行尾的内容        |

### 12.6 撤销和替换

在一般模式下可以通过以下命令执行撤销和替换操作。

| 命令      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| u         | 撤销上一步操作                                               |
| ctrl + r  | 恢复上一步撤销的操作 (mac 系统不要使用外接非mac键盘, 可能出问题) |
| r         | 替换光标所在处的字符                                         |
| shift + r | 从光标所在处开始替换字符, 替换结束后按 ESC 退出              |

### 12.7 退出编辑

在底行模式下, 可以使用以下命令进行执行保存和退出操作。

| 命令 | 描述                                   |
| ---- | -------------------------------------- |
| q    | 没有任何修改时, 使用 q 退出 vim 编辑器 |
| q!   | 强制退出 vim 编辑器, 不保存内容        |
| w    | 保存不退出                             |
| wq   | 保存退出                               |

### 12.8 交换文件

当 vim 编辑器以非正常方式退出时, 编辑器会自动生成交换文件, 它用于保存文件由于非正常退出时用户来不及保存的内容。 

交换文件名称以`"点"`开头, 后面是`源文件名称`, 最后以 `.swp` 后缀结尾, 比如源文件名称是 `demo.js`, 交换文件名称就是 `.demo.js.swp`。

|                   |                                                    |
| ----------------- | -------------------------------------------------- |
| 以只读方式打开(O) | 查看内容, 不包含非正常退出前的最新内容             |
| 直接编辑(E)       | 编辑内容, 不包含非正常退出前的最新内容             |
| 恢复(R)           | 恢复非正常退出时的最新内容                         |
| 退出(Q)           | 不做任何事情, 直接退出                             |
| 删除交换文件(D)   | 交换文件被删除后, 非正常退出时的最新内容不会被恢复 |

注意: 交换文件使用完成后, 通过删除它避免重复看到交换文件已存在的提示内容。
