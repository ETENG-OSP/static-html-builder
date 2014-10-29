module.exports = function (grunt) {

  grunt.config('clean', {

    dist: {
      src: '<%= config.dist %>'
    },

    temp: {
      src: '<%= config.temp %>'
    }
    
  });

};
