static-html-builder
===================

这个工具帮助用户编写静态 HTML 文件。

特点：
- 使用 less
- 使用 bower
- 兼容 IE 8
- 自动整合压缩脚本、样式文件，提高生产环境加载速度
- 开发时内置代理，无需手动关闭浏览器安全性
- 自动引入 *.js 与 *.less，无需手动维护
- 生成 less source map 文件，方便调试页面
- 方便更新

安装方法
----

安装之前确保已经有 git 和 node.js 环境。node.js 需要 bower 与 grunt-cli。

执行以下命令：
```
git clone https://github.com/gengen1988/static-html-builder.git
cd static-html-builder
npm install
bower install
```
