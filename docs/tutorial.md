建立我的第一个应用
================

通过。


建立模块
----------------

模块是应用的组成部分。

新建一个文件，命名为 `app.urgent.js`。urgent 是 SHB 的一个特殊符号，代表最早加载的 js 文件。在 `app.urgent.js` 中，编写以下代码：

```javascript
// file: app/app.urgent.js

(function () {
  angular.module('app', []);
})();
```

编辑文件 `project.json`，在 `main` 字段中指定入口模块 `app`。

```json
{
  "name": "Static HTML App",
  "main": "app",
  "dependencies": {
    "angular-route": "~1.2"
  },
  "overrides": {
    "marked": "lib/marked.js"
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
(function () {
  function config($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'root.html'
    });
  }
  config.$inject = ['$routeProvider'];

  angular.module('app', ['ngRoute']).config(config);
})();
```
这样就建立了一个路由关系：当用户访问网站的根目录时，系统会加载 `root.html` 作为页面的展示部分。

建立页面
-------

单页面应用使用 HTML 片段进行开发。编写代码时无需编写 head 或引入额外的 script。下面是 `root.html` 的例子：

```html
<h1>你好世界</h1>
<p>这是我的第一个应用</p>
```

建立控制器
-------

控制器用于实现用户交互逻辑。

```javascript
// file: app/root-controller.js

(function () {
  /**
   * 定义 Controller
   */
  angular.module('app').controller('RootController', RootController);

  /**
   * 注入依赖
   */
  RootController.$inject = ['$scope'];

  /**
   * 实现 Controller
   */
  function RootController($scope) {
    $scope.text = '你好世界';
  }
})();
```

将控制器加入路由，允许页面使用定义好的控制器。

```javascript
// file: app/app.js

(function () {
  angular.module('app', ['ngRoute']).config(config);
  config.$inject = ['$routeProvider'];
  function config($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'root.html',
      controller: 'RootController'
    });
  }
})();
```

在页面使用控制器控制的变量

```html
<!-- file: app/root.html -->

<h1 ng-bind="text"></h1>
<p>这是我的第一个应用</p>
```

使用服务抽象业务逻辑
------------------

服务用于编写与页面无关的逻辑，比如 http 请求。

```javascript
// file: app/test-service.js

(function () {  
  angular.module('app').service('TestService', TestService);

  TestService.$inject = ['$http', '$q'];

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
})();
```

使用 Promise 获取异步操作结果
----

`$q` 用于处理异步操作。

```javascript
// file: app/root-controller.js

(function () {
  /**
   * 定义 Controller
   */
  angular.module('app').controller('RootController', RootController);

  /**
   * 注入依赖
   */
  RootController.$inject = ['$scope', 'TestService'];

  /**
   * 实现 Controller
   */
  function RootController($scope, TestService) {
    TestService.getData().then(function () {
      $scope.text = '你好世界';
    });
  }
})();
```

## 限制路由访问

使用 resolve 配置路由是否成功，如果返回一个失败的 promise，则路由失败。

```javascript
// file: app/app.js

(function () {
  angular.module('app', ['ngRoute']).config(config);
  config.$inject = ['$routeProvider'];
  acl.$inject = ['$q'];

  function config($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'root.html',
      controller: 'RootController',
      resolve: {
        acl: acl
      }
    });
  }

  function acl($q) {
    var deferred = $q.defer();
    deferred.reject();
    return deferred.promise;
  }
})();
```

## 使用 Directive 封装 View 组件

directive 通常有两个作用：

1. 将一系列的 html 与行为封装成一个标签；
2. 适配其他框架的初始化代码；

定义 directive
```javascript
// file: app/list.js

(function () {
  angular.module('app').directive('list', list);

  list.$inject = ['$http'];

  function list($http) {
    return {
      template: [
        '<ul>',
          '<li ng-repeat="item in items">{{item.text}}</li>',
        '</ul>'
      ].join(''),
      link: function (scope, element, attrs) {
        $http.get(attrs.source).success(function (result) {
          scope.items = result;
        });
      }
    }
  }
})();
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
