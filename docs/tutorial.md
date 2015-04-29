建立我的第一个应用
================

通过。


建立模块
----------------

模块是应用的组成部分。

新建一个文件，命名为 `app.urgent.js`。urgent 是 SHB 的一个特殊符号，代表最早加载的 js 文件。在 `app.urgent.js` 中，编写以下代码：

```javascript
// Source: app/app.urgent.js

// 建立 app 模块
angular.module('app', []);
```

编辑文件 `project.json`，在 `main` 字段中指定入口模块 `app`。

```json
{
  "name": "Static HTML App",
  "main": "app",
  "dependencies": {
    "angular-route": "~1.2"
  },
  "proxies": {
    "/api": "http://localhost:8080"
  }
}
```

这样就建立了一个名为 `app` 的模块。接下来的教程均会以该模块为例进行说明。在实际环境中，开发者需要自行决定模块的名称与依赖。


建立路由
-------

使用路由来建立 url 与页面的对应关系。

修改 `app.urgent.js`，加入路由模块与相应的配置：

```javascript
// Source: app/app.urgent.js

// 加入对路由模块的依赖
angular.module('app', ['ngRoute']).config(config);

// 配置路由，使用注解语法标明注入的组件
// @ngInject
function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'root.html'
  });
}
```
这样就建立了一个路由关系：当用户访问网站的根目录时，系统会加载 `root.html` 作为页面的展示部分。

建立页面
-------

单页面应用使用 HTML 片段进行开发。编写代码时无需编写 head 或引入额外的 script。下面是 `root.html` 的例子：

```html
<!-- Source: root.html -->
<h1>你好世界</h1>
<p>这是我的第一个应用</p>
```

建立控制器
-------

控制器用于实现用户交互逻辑。

```javascript
// Source: app/root-controller.js

// 定义 Controller
angular.module('app').controller('RootController', RootController);

// 实现 Controller
function RootController() {
  var vm = this;
  vm.text = '你好世界';
}
```

将控制器加入路由，允许页面使用定义好的控制器。

```javascript
// Source: app/app.js

angular.module('app', ['ngRoute']).config(config);

// @ngInject
function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'root.html',
    controller: 'RootController',
    controllerAs: 'root'
  });
}
```

在页面使用控制器控制的变量

```html
<!-- Source: app/root.html -->
<h1 ng-bind="root.text"></h1>
<p>这是我的第一个应用</p>
```

使用服务抽象业务逻辑
------------------

服务用于编写与页面无关的逻辑，比如 http 请求。

```javascript
// Source: app/test-service.js

angular.module('app').service('TestService', TestService);

// @ngInject
function TestService($http, $q) {
  /**
    * TestService.getDate
    * 测试 HTTP 调用
    * @return promise
    */
  this.getData = function () {
    var deferred = $q.defer();
    $http.get('http://localhost:9001/test')
      .success(deferred.resolve)
      .error(deferred.reject);
    return deferred.promise;
  }
}
```

使用 Promise 获取异步操作结果
----

`$q` 用于处理异步操作。

```javascript
// Source: app/root-controller.js

// 定义 Controller
angular.module('app').controller('RootController', RootController);

// 实现 Controller
// @ngInject
function RootController(TestService) {
  var vm = this;

  // 调用 Service 方法，并处理 promise 得到的结果
  TestService.getData().then(function () {
    vm.text = '你好世界';
  });

}
```

## 限制路由访问

使用 resolve 配置路由是否成功，如果返回一个失败的 promise，则路由失败。

```javascript
// Source: app/app.js

angular.module('app', ['ngRoute']).config(config);

// @ngInject
function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'root.html',
    controller: 'RootController',
    resolve: {
      acl: acl
    }
  });
}

// @ngInject
function acl($q) {
  var deferred = $q.defer();
  deferred.reject();
  return deferred.promise;
}
```

## 使用 Directive 封装 View 组件

directive 通常有两个作用：

1. 将一系列的 html 与行为封装成一个标签；
2. 适配其他框架的初始化代码；

定义 directive
```javascript
// Source: app/list.js

angular.module('app').directive('list', list);

// @ngInject
function list($http) {
  return {
    template: [
      '<ul>',
        '<li ng-repeat="item in items">{{item.text}}</li>',
      '</ul>'
    ].join(''),
    link: link
  };

  function link(scope, element, attrs) {

    // 获取 data-source 属性的值，并请求后台
    $http.get(attrs.source).success(function (result) {
      scope.items = result;
    });
  }
}
```

使用 directive
```html
<h1>这是 directive 例子</h1>
<list data-source="/raw/list.json"></list>
```

上面例子的数据
```json
[
  {"text": "foo"},
  {"text": "bar"},
  {"text": "baz"}
]
```
