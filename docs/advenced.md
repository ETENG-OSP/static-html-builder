使用 ngResource 封装 RESTFul API
--------------

我们通常不使用 Controller 直接调用 HTTP 请求，而是把这些请求通过 Service 封装后使用。这么做的好处是：

- 可以在多个地方重复使用
- 分离关注点，Controller 放置用户交互的逻辑，Service 放置与界面无关的逻辑

基本的做法是：
```javascript
angular.module('app').service('Message', MessageService);

// @ngInject
function MessageService($http, $q) {

  this.getAll = function () {
    var deferred = $q.defer();
    $http.get('/api/messages')
      .success(deferred.resolve)
      .error(deferred.reject);
    return deferred.promise;
  };

  this.getById = function (id) {
    var deferred = $q.defer();
    $http.get('/api/messages/' + id)
      .success(deferred.resolve)
      .error(deferred.reject);
    return deferred.promise;
  };

}
```

使用方法是：

```javascript
angular.module('app').controller('PageController', PageController);

// @ngInject
function PageController(Message) {

  var vm = this;

  load();

  function load() {
    Message.getAll().then(function (messages) {
      vm.messages = messages;
    });
  }
}
```

这么做每次都要写大量增删改查的代码，很麻烦。更好的做法是使用 ngResource 代替自己写的 Service，好处是：

- 基本增删改查自动生成，无需编写额外的代码
- 自动解决 Promise，更直观

使用之前先将 ngResource 安装好，并加入依赖：

```bash
bower install --save angular-resource
```

Service 编写方法为：

```javascript
angular.module('app').factory('Message', MessageFactory);

// @ngInject
function MessageFactory($resource) {

  return $resource('/api/messages', {}, {});

}
```

使用方法为：

```javascript
angular.module('app').controller('PageController', PageController);

// @ngInject
function PageController(Message) {

  var vm = this;

  load();

  function load() {
    vm.messages = Message.query();
  }

}
```

更详细的写法请参考官方文档：[angular-resource](http://docs.angularjs.cn/api/ngResource/service/$resource)
