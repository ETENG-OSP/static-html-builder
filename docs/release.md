# 版本历史

## 3.1.4 (2015-07-31)
- 可自由选择 AngularJS 1.4.x 或 AngularJS 1.3.x

## 3.1.3 (2015-06-08)
- 更新 AngularJS 到 1.4.x

## 3.1.2 (2015-05-07)
- 修正 Windows 下模板整合时出现的路径问题

## 3.1.1 (2015-04-29)
- 自动压缩 html 片段，减小下载量
- html 片段编译时加入 index.html，减小首次加载延迟
- 模板加载优化
- 更新 grunt-filerev 到 2.3.1
- 更新 http-proxy 到 1.11.1

## 3.1.0 (2015-04-08)
- 加入 filerev，在每次编译后为文件名加入版本号，保证应用更新后刷新缓存
- 加入 ng-annotate，允许使用 `// @ngInject` 自动注入依赖
- 整合脚本时，自动加入闭包，防止污染全局命名空间
- 编译后自动加入严格模式标志 `'use strict';`
- 支持 svg 图片
- 初始化项目时，自动生成主模块
- 更换 template 脚本到标准 grunt-template 模块
- 更换 bower install 脚本到标准 grunt-shell 模块
- 升级 grunt-contrib-concat 到 0.5.1
- 升级 http-proxy 到 1.10.1
- 去除内置 tutorial 文档支持代码

## 3.0.3 (2015-03-14)
- 修正路由切换后滚动条未重置的问题

## 3.0.2
- 修正 project.json 无法修改 HTML 内容问题
- 修正 grunt install 无法运行问题
- 修正 less 中 url 引用的路径问题
- 升级 angular 到 1.3.x
- 移除内置的 tutorial
- 精简

## 3.0.1 (2015-02-03)
- 加入 mkdocs 文档，在线文档地址为 http://gengen1988.github.io/static-html-builder/
- 移除对 ngRoute 的引用，允许自由选用路由模块
- 加入对 ui.router 的支持
- project.json 中，加入 main，用于指定入口模块
- project.json 中，加入 name，用于指定 HTML title
- project.json 中，bowerDependencies 更名为 dependencies
- project.json 中，bowerOverrides 更名为 overrides
- project.json 中，移除 angularModules，将 Angular 依赖放入应用中配置
- project.json 中，移除 tutorial，使用 docs 代替
- project.json 中，加入默认配置项
- 重构 grunt tasks，移除未使用的任务
