module.exports = function (grunt) {

  grunt.config('wiredep', {

    prepareHtml: {
      src: ['<%= config.generated %>/index.html'],
      options: {
        ignorePath: '../../'
      }
    }

  });

};
