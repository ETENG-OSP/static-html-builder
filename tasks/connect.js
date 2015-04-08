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
        middleware: require('../lib/middleware')
      }
    }
  });

};
