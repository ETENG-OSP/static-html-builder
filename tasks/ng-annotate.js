module.exports = function (grunt) {

  grunt.config('ngAnnotate', {
    options: {
      singleQuotes: true
    },
    dev: {
      files: [{
        expand: true,
        src: ['app/route.js'],
        dest: '.tmp/test'
      }]
    }
  });

};
