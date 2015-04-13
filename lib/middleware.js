var fs = require('fs');
var httpProxy = require('http-proxy');

module.exports = middleware;

var proxy = httpProxy.createProxyServer();

var config = {
  app: 'app',
  generated: '.tmp/generated'
};

var project = JSON.parse(fs.readFileSync(__dirname + '/../app/project.json'));

function middleware(connect) {
  var app = connect();
  var middlewares = [
    app.use('/bower_components', connect.static('bower_components')),
    connect.static(config.app, {
      index: 'index-framework.html'
    }),
    connect.static(config.generated, {
      index: 'index-framework.html'
    })
  ];

  Object.keys(project.proxies).forEach(function (pathname) {
    app.use(pathname, function (req, res) {
      console.log('proxy: %s', req.url);
      var target = project.proxies[pathname] + pathname;
      proxy.web(req, res, { target: target });
    });
  });

  return middlewares;
};
