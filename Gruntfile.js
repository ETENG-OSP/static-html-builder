var fs = require('fs');
var path = require('path');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var appConfig = {
    app: 'app',
    framework: 'framework',
    dist: 'dist',
    temp: '.tmp'
  };

  grunt.initConfig({
    config: appConfig,

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
                var basename = path.basename(block.dest);

                var files = context.inFiles.filter(function (file) {
                  return path.extname(file) === '.less';
                });

                options.files = files.map(function (file) {
                  context.options.generated.options = {
                    sourceMapURL: basename + '.map',
                    sourceMapFilename: '<%= config.dist %>/' + block.dest + '.map'
                  };
                  return {
                    src: '<%= config.app %>/' + file,
                    dest: '<%= config.dist %>/' + block.dest
                  }
                });

                return options;
              }
            }],
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

    connect: {
      options: {
        port: 9000
      },
      dist: {
        options: {
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
    },

    includeSource: grunt.file.readJSON('config/include-source.json'),
    wiredep: grunt.file.readJSON('config/wiredep.json'),
    watch: grunt.file.readJSON('config/watch.json'),
    less: grunt.file.readJSON('config/less.json'),
    copy: grunt.file.readJSON('config/copy.json'),
    clean: grunt.file.readJSON('config/clean.json')
  });

  grunt.registerTask('build', [
    'clean',
    'prepareHtml',
    'copy',
    'useminPrepare',
    'generated',
    'usemin',
    'clean:temp'
  ]);

  grunt.registerTask('generated', [
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'less:generated'
  ]);

  grunt.registerTask('prepareHtml', ['includeSource:dev', 'wiredep:dev']);
  grunt.registerTask('serve', ['prepareHtml', 'connect:dev', 'watch']);
  grunt.registerTask('default', ['serve']);
};
