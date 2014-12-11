module.exports = function (grunt) {

  grunt.config('wiredep', {

    prepareHtml: {
      src: ['<%= config.generated %>/index-framework.html'],
      options: {
        ignorePath: '../../'
      }
    }

  });

};
