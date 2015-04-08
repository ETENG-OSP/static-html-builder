module.exports = function (grunt) {
  grunt.config('filerev', {
    dist: {
      src: [
        '<%= config.dist %>/**/*.js',
        '<%= config.dist %>/**/*.css'
      ]
    }
  });
};
