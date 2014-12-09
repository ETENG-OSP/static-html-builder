module.exports = function (grunt) {

  grunt.config('usemin', {
    html: '<%= config.dist %>/**/*.html',
    options: {
      blockReplacements: {
        less: require('../lib/grunt/usemin-block-replacements-less.js')
      }
    }
  });

};
