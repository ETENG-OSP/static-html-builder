module.exports = function (grunt) {

  grunt.config('ngAnnotate', {
    dist: {
      files: [{
        expand: true,
        cwd: '<% config.temp %>/concat',
        src: '*.js',
        dest: '<% config.temp %>/concat'
      }]
    },
    options: {
      singleQuotes: true
    }
  });

};
