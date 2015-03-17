# SVN 推荐用法

Static HTML Builder 是一个工具，不是项目。在项目开发过程中，Static HTML Builder 有可能会更新。因此不推荐将 Static HTML Builder 加入版本管理。

在介绍之前，明确几个原则：

1. 一个项目（应用）使用一个 Static HTML Builder。由于 Static HTML Builder 会管理依赖，同时也会自动将依赖加载到页面上。不同项目依赖不同模块，如果混合使用需要话费大量时间在检查依赖上。

## 建立新项目

### 1. 使用 Eclipse 创建 General Project



### 检出最新的 Static HTML Builder
```bash
git clone https://github.com/gengen1988/static-html-builder
```

### 建立项目文件夹
```bash
mkdir <项目名>
```

### 将项目文件夹符号链接到 Static HTML Builder

windows:
```bash
mklink -j link target
```

linux:
```bash
ln -s target link
```

### 初始化 Static HTML Builder
```bash
npm install
```
