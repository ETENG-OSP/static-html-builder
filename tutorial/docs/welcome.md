建立我的第一个应用
================

欢迎使用 Static HTML Builder，这是一个单页面制作工具。它以 Angular 为核心。


建立模块
-------

模块是应用的组成部分。

新建一个文件，命名为 `app.urgent.js`。urgent 是 SHB 的一个特殊符号，代表最早加载的 js 文件。在 `app.urgent.js` 中，编写以下代码：

```javascript
// file: app/app.urgent.js

(function () {
  angular.module('app', []);
})();
```

编辑文件 `project.json`，在 `angularModule` 字段中加入 "app"，如下：

```json
{
  "bowerDependencies": {},
  "bowerOverrides": {},
  "angularModules": [
    "app"
  ],
  "proxies": {},
  "tutorial": true
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

限制路由访问
-----------

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

如何安装
--------

```bash
git clone https://github.com/gengen1988/static-html-builder.git
cd static-html-builder
npm install
```

文件结构说明
--------

目录名           | 介绍
---------------- | --------------
app              | 项目目录
bower_components | bower 存放路径
dist             | 编译后文件的存放路径
tasks            | grunt 任务配置




如何引入第三方依赖
-----

```bash
bower install <包名>
```



升级指南
-------

待补充
