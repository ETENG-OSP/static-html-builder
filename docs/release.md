# 版本历史

## 3.0.3 2015-03-14
- 修正路由切换后滚动条未重置的问题

## 3.0.2

- 修正 project.json 无法修改 HTML 内容问题
- 修正 grunt install 无法运行问题
- 修正 less 中 url 引用的路径问题
- 升级 angular 到 1.3.x
- 移除内置的 tutorial

## 3.0.1 2015-02-03

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
