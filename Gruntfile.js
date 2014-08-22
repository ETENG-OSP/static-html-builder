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
      html: '<%= config.app %>/**/*.html',
    },

    usemin: {
      html: '<%= config.app %>/**/*.html',
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
      dist: {
        expand: true,
        cwd: '<%= config.app %>',
        src: '**/*.html',
        dest: '<%= config.dist %>/'
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

  grunt.registerTask('newbuild', [
    'clean',
    'wiredep:dev',
    'copy:dist',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin'
  ]);

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
