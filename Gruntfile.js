module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var appConfig = {
    app: 'public',
    dist: 'dist'
  };

  grunt.initConfig({
    config: appConfig,

    connect: {
      options: {
        port: 9000
      },
      dev: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              connect().use('/bower_components', connect.static('bower_components')),
              connect.static(appConfig.app)
            ];
          }
        }
      }
    },

    less: {
      dev: {
        files: {
          '<%= config.dist %>/css/app.css': '<%= config.app %>/less/app.less'
        }
      }
    },

    copy: {
      dev: {
        src: '<%= config.app %>/index.html',
        dest: '<%= config.dist %>/index.html'
      }
    },

    clean: {
      dist: {
        src: '<%= config.dist%>'
      }
    }

  });

  grunt.registerTask('build', ['clean', 'less', 'copy']);
  grunt.registerTask('default', ['connect']);
};
