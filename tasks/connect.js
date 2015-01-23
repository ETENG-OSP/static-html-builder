var httpProxy = require('http-proxy');
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
        keepalive: true,
        index: 'index-framework.html'
      }
    },
    dev: {
      options: {
        livereload: true,
        middleware: function (connect) {
          var project = grunt.file.readJSON('app/project.json');
          var app = connect();
          var middlewares = [
            app.use('/bower_components', connect.static('bower_components')),
            app.use('/tutorial', connect.static('tutorial')),
            function (req, res, next) {
              if (project.tutorial) {
                res.writeHead(302, {
                  'Location': '/tutorial'
                });
                return res.end();
              }
              next();
            },
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
              proxy.web(req, res, {
                target: project.proxies[pathname] + pathname
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
