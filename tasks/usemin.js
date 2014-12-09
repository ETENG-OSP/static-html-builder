module.exports = function (grunt) {

  grunt.config('usemin', {
    html: '<%= config.dist %>/**/*.html',
    options: {
      blockReplacements: {
        less: function (block) {
          return '<link rel="stylesheet" href="' + block.dest + '">';
        }
      }
    }
  });

};
