如何安装
--------

```bash
git clone https://github.com/gengen1988/static-html-builder.git
cd static-html-builder
npm install
```

## 文件结构说明


目录名            | 介绍
---------------- | --------------
app              | 项目目录，推荐使用符号链接将实际项目链接到该目录
bower_components | bower 存放路径
dist             | 编译后文件的存放路径
tasks            | grunt 任务配置
docs             | 文档

## 符号链接创建方法

linux
```bash
ln -s source target
```

windows
```bash
mklink /j target source
```

引入第三方依赖
-----

```bash
bower install <包名>
```

安装完成后，修改 `project.json` 加入新项目的包名与版本。

最后执行 `grunt init` 确保安装成功。

升级指南
-------

```bash
git pull
```
