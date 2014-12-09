var path = require('path');

module.exports = function (grunt) {
  'use strict';
  grunt.config('useminPrepare', {
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
                  src: '<%= config.generated %>/' + file,
                  dest: '<%= config.dist %>/' + block.dest
                };
              });

              console.log(options);

              return options;
            }
          }],
        },
        post: {}
      }
    }
  });
};
