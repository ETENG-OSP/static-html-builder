Static HTML Builder
======================

这个工具帮助用户编写基于 AngularJS 的单页面应用。它生成静态 HTML 文件，可用于服务器托管，也可用于构建 Cordova 应用。

特点：

- 使用 less 管理样式
- 使用 bower 管理第三方依赖包
- 支持 IE9 以上浏览器
- 自动整合压缩脚本、样式文件，提高生产环境加载速度
- 开发时内置代理，无需手动关闭浏览器安全性
- 自动引入 `*.js` 与 `*.less`，无需手动维护
- 生成 less source map 文件，方便调试页面
- 自动加入闭包，避免全局命名空间污染
- 支持 ngAnnotate 语法

安装方法
=======================

安装之前确保已经有 git 和 node.js 环境。node.js 需要 bower 与 grunt-cli。

执行以下命令：
```bash
git clone https://github.com/gengen1988/static-html-builder.git
cd static-html-builder
npm install
```
