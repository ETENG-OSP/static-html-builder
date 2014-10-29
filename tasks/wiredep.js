module.exports = function (grunt) {

  grunt.config('wiredep', {

    inject: {
      src: ['<%= config.generated %>/index.html'],
      options: {
        ignorePath: '../../'
      }
    }

  });

};
