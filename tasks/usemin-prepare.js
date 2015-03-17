var ngAnnotate = require('../lib/ng-annotate.js');
var less = require('../lib/less.js');

module.exports = function (grunt) {
  'use strict';
  grunt.config('useminPrepare', {
    html: '<%= config.dist %>/**/*.html',
    options: {
      flow: {
        steps: {
          js: ['concat', 'uglifyjs'],
          css: ['concat', 'cssmin'],
          less: [less],
        },
        post: {}
      }
    }
  });
};
