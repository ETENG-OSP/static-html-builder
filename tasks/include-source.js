module.exports = function (grunt) {

  grunt.config('includeSource', {

    options: {
      basePath: '<%= config.app %>',
      baseUrl: '<%= config.app %>',
      ordering: 'top-down'
    },

    scripts: {
      files: {
        '<%= config.generated %>/index-framework.html': '<%= config.generated %>/index-framework.html'
      }
    },

    stylesheets: {
      files: {
        '<%= config.generated %>/app-framework.less': '<%= config.framework %>/app-framework.less'
      }
    }

  });

};
