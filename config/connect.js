var httpProxy = require('http-proxy');
var config = require('./config');
var project = require('../app/project.json');

var proxy = httpProxy.createProxyServer();

module.exports = {
  options: {
    port: 9000
  },
  dist: {
    options: {
      hostname: '*',
      base: '<%= config.dist %>',
      keepalive: true
    }
  },
  dev: {
    options: {
      livereload: true,
      middleware: function (connect) {
        var app = connect();
        var middlewares = [
          app.use('/bower_components', connect.static('bower_components')),
          connect.static(config.app),
          connect.static(config.generated)
        ];

        Object.keys(project.proxy).forEach(function (pathname) {
          app.use(pathname, function (req, res) {
            proxy.web(req, res {
              target: project.proxy[pathname] + pathname
            }, function (e) {
              res.statusCode = 500;
              res.end();
            });
          });
        });

        return middlewares;
      }
    }
  }
};
