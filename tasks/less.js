module.exports = function (grunt) {

  grunt.config('less', {
    options: {
      paths: '<%= config.app %>',
      sourceMap: true,
      outputSourceFiles: true,
      compress: true,
      rootpath: '../',
      ieCompat: true
    }
  });

};
