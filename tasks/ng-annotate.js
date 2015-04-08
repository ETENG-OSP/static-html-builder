module.exports = function (grunt) {

  grunt.config('ngAnnotate', {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= config.temp %>/concat/js',
        src: '*.js',
        dest: '<%= config.temp %>/concat/js'
      }]
    },
    options: {
      singleQuotes: true
    }
  });

};
