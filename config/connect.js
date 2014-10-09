var appConfig = require('./config');

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
          connect.static(appConfig.framework)
        ];
      }
    }
  }
};
