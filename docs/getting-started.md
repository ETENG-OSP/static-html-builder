开始使用
========

如何安装
--------

```bash
git clone https://github.com/gengen1988/static-html-builder.git
cd static-html-builder
npm install
```

文件结构说明
--------

目录名            | 介绍
---------------- | --------------
app              | 项目目录，推荐使用符号链接将实际项目链接到该目录
bower_components | bower 存放路径
dist             | 编译后文件的存放路径
tasks            | grunt 任务配置
docs             | 文档

符号链接使用方法

Windows：
```bash
mklink -j link target
```

Linux：
```bash
ln -s link target
```

如何引入第三方依赖
-----

```bash
bower install <包名>
```

升级指南
-------

待补充
