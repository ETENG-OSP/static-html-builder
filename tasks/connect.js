var httpProxy = require('http-proxy');
var project = require('../app/project');

var proxy = httpProxy.createProxyServer();

var config = {
  app: 'app',
  generated: '.tmp/generated'
};

module.exports = function (grunt) {

  grunt.config('connect', {
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
              console.log('proxy: %s', req.url);
              proxy.web(req, res, {
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
  });

};
