module.exports = function (grunt) {
  grunt.config('htmlmin', {
    ngTemplate: {
      files: [{
        expand: true,
        cwd: '<%= config.app %>',
        src: '**/*.html',
        dest: '<%= config.temp %>/ngTemplate/src'
      }]
    },
    options: {
      collapseWhitespace: true,
      removeComments: true
    }
  });
};
