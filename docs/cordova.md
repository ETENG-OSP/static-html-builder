cordova打包帮助
===============

cordova打包依赖
-------------
1. JDK
2. Android SDK
3. ANT

安装JDK
--------------
1. 下载JDK程序
2. 将下载的JDK文件安装
3. 配置环境变量

安装Android SDK
--------------
1. 打开android应用包
2. 解压到～/server下
3. 配置环境变量

打开终端输入命令

```bash
  vi ~/.profile
```

在打开的窗体最后一行输入
```bash
export ANDROID_HOME=/home/garyhan/server/android-sdk-linux;
export PATH=$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH
```

填写完成后保存

在当前窗体更新环境变量

命令：

```bash
source .profile
```

在窗体中输入`android`命令，列出很多帮助信息说明 Android 安装成功

安装ant
---------------

打开终端输入命令

```bash
sudo zypper install ant
```

安装cordova
---------------

终端输入命令

```bash
sudo npm install -g cordova
```

cordova操作
===========

### 打开终端输入命令创建项目路径
```bash
  cd ~
  mkdir project
  cd project
```


### 创建项目

```bash
  cordova create hello org.aguegu.hello HelloApp
```

`cordova create` 为固定格式

hello为项目文件夹（不存在的存在创建失败）

org.aguegu.hello  为命名空间

HelloApp 为项目名称

目录名      |    说明
---------- | --------------
hooks      | 说明文件
platform   | 存储当前项目支持的平台
plugins    | 存储插件
www        | 存储需要生成到APK中的HTML文件
config.xml | 项目配置文件


### 增加android平台支持（此处需要用到JDK，androidSDK,ANT没有安装或者环境变量配置有误将无法进行正常运行）

```bash
cd hello
cordova platform add android
```

运行成功后既可以将此cordova项目生成apk文件了

### 生成apk文件

```bash
cordova build
```

生成一个 apk 文件，最后一行会提示生成文件所在文件夹。
