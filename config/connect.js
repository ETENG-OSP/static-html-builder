var httpProxy = require('http-proxy');
var appConfig = require('./config');

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
        return [
          connect().use('/bower_components', connect.static('bower_components')),
          connect.static(appConfig.app),
          connect.static(appConfig.framework),
          function (req, res) {
            proxy.web(req, res, {
              target: 'http://192.168.0.151:3000'
            }, function (e) {
              console.error(e);
              res.statusCode = 500;
              res.end();
            });
          }
        ];
      }
    }
  }
};
