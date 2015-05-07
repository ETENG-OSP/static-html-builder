var path = require('path');

module.exports = function (grunt) {

  grunt.config('concat', {

    generated: {
      options: {
        process: function (src, filepath) {
          if (path.extname(filepath) !== '.js') {
            return src;
          }
          if (filepath.indexOf('app') !== 0) {
            return src;
          }
          return '(function(){' + src + '})();';
        }
      }
    },

    useStrict: {
      src: ['<%= config.temp %>/concat/js/app.js'],
      dest: '<%= config.temp %>/concat/js/app.js',
      options: {
        banner:  '\'use strict\';'
      }
    },

    ngTemplate: {
      src: ['<%= config.temp %>/ngTemplate/src/**/*.html'],
      dest: '<%= config.temp %>/ngTemplate/concat.html',
      options: {
        process: function (src, filepath) {
          var templateUrl = path.relative('.tmp/ngTemplate/src/', filepath)
            .split(path.sep)
            .join('/');

          return '<script id="' + templateUrl + '" type="text/ng-template">' + src + '</script>';
        }
      }
    }

  });

};
