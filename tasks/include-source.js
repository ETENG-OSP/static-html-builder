module.exports = function (grunt) {

  grunt.config('includeSource', {

    options: {
      basePath: '<%= config.app %>',
      baseUrl: '<%= config.app %>'
    },

    scripts: {
      files: {
        '<%= config.generated %>/index.html': '<%= config.generated %>/index.html'
      }
    },

    stylesheets: {
      files: {
        '<%= config.generated %>/app.less': '<%= config.framework %>/app.less'
      }
    }
    
  });

};
