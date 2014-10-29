var path = require('path');

module.exports = function (grunt) {

  grunt.config('useminPrepare', {

    html: '<%= config.dist %>/**/*.html',
    options: {
      flow: {
        steps: {
          js: ['concat', 'uglifyjs'],
          css: ['concat', 'cssmin'],
          less: [require('../lib/grunt/usemin-prepare-less')],
        },
        post: {}
      }
    }
    
  });

};
