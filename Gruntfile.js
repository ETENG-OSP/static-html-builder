module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var appConfig = {
    app: 'public',
    dist: 'dist'
  };

  grunt.initConfig({
    config: appConfig,

    wiredep: {
      dev: {
        src: '<%= config.app %>/index.html',
        exclude: ['less'],
        ignorePath: '..'
      },
      dist: {
        src: '<%= config.app %>/_index.html',
        exclude: ['less']
      }
    },

    useminPrepare: {
      html: '<%= config.app %>/_index.html',
      options: {
        dest: '<%= config.dist %>'
      }
    },

    usemin: {
      html: '<%= config.app %>/_index.html',
      options: {
        blockReplacements: {
          less: function (block) {
            return '<link rel="stylesheet" href="' + block.dest + '">';
          }
        }
      }
    },

    watch: {
      dev: {
        files: '<%= config.app %>/**/*.*',
        options: {
          livereload: true
        }
      }
    },

    connect: {
      options: {
        port: 9000
      },
      dev: {
        options: {
          livereload: true,
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
        dest: '<%= config.app %>/_index.html'
      },
      dist: {
        src: '<%= config.app %>/_index.html',
        dest: '<%= config.dist %>/index.html'
      }
    },

    clean: {
      temp: {
        src: '<%= config.app %>/_index.html'
      },
      dist: {
        src: '<%= config.dist %>'
      }
    }

  });

  grunt.registerTask('build', [
    'clean:dist',
    'copy:dev',
    'wiredep:dist',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin',
    'copy:dist',
    'clean:temp',
    'less'
  ]);

  grunt.registerTask('serve', ['wiredep:dev', 'connect:dev', 'watch:dev']);

  grunt.registerTask('default', ['serve']);
};
