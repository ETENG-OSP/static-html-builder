# 版本历史

## 3.0.1

- 加入 mkdocs 文档，在线文档地址为 http://gengen1988.github.io/static-html-builder/
- 移除对 ngRoute 的引用，允许自由选用 ngRoute / ui.router
- project.json 中，加入 main，用于指定入口模块
- project.json 中，bowerDependencies 更名为 dependencies
- project.json 中，bowerOverrides 更名为 overrides
- project.json 中，移除 angularModules，将 Angular 依赖放入应用中配置
- project.json 中，移除 tutorial，使用 docs 代替
- project.json 中，加入默认配置项
- 重构 grunt tasks，移除未使用的任务
