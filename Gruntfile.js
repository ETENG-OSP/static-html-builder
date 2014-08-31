var fs = require('fs');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var appConfig = {
    app: 'app',
    framework: 'framework',
    dist: 'dist'
  };

  grunt.initConfig({
    config: appConfig,

    includeSource: {
      options: {
        basePath: '<%= config.app %>',
        baseUrl: '<%= config.app %>',
        templates: {
          html: {
            js: '<script src="{filePath}"></script>'
          }
        }
      },
      dev: {
        files: {
          '<%= config.framework %>/index.html': '<%= config.framework %>/index.html'
        }
      }
    },

    wiredep: {
      dev: {
        src: '<%= config.framework %>/index.html',
        exclude: ['less', 'es5-shim', 'html5shiv', 'respond'],
        ignorePath: '../'
      }
    },

    useminPrepare: {
      html: '<%= config.dist %>/**/*.html',
      options: {
        flow: {
          steps: {
            js: ['concat', 'uglifyjs'],
            css: ['concat', 'cssmin'],
            less: [{
              name: 'less',
              createConfig: function (context, block) {
                var options = {};

                var files = context.inFiles.filter(function (file) {
                  return file.substr(file.length - 5, 5) === '.less';
                });

                options.files = files.map(function (file) {
                  context.options.generated.options = {
                    sourceMapURL: block.dest + '.map',
                    sourceMapFilename: '<%= config.dist %>/css/' + block.dest + '.map'
                  };
                  return {
                    src: '<%= config.app %>/' + file,
                    dest: '<%= config.dist %>/' + block.dest
                  }
                });

                return options;
              }
            }]
          },
          post: {}
        }
      }
    },

    usemin: {
      html: '<%= config.dist %>/**/*.html',
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

    less: {
      options: {
        sourceMap: true,
        outputSourceFiles: true,
        compress: true
      }
    },

    connect: {
      options: {
        port: 9000
      },
      dist: {
        options: {
          base: 'dist',
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
              // function (req, res) {
              //   var index = appConfig.app + '/index.html';
              //   res.writeHead(200, {
              //     'Content-Type': 'text/html',
              //     'Content-Length': fs.statSync(index)
              //   });
              //   var stream = fs.createReadStream(index);
              //   stream.pipe(res);
              // }
            ];
          }
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

  grunt.registerTask('build', [
    'clean',
    'wiredep:dev',
    'copy:dist',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'less:generated',
    'usemin'
  ]);

  grunt.registerTask('serve', ['wiredep:dev', 'connect:dev', 'watch:dev']);

  grunt.registerTask('default', ['serve']);
};
