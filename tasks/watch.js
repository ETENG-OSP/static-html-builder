module.exports = function (grunt) {

  grunt.config('watch', {

    scripts: {
      files: '<%= config.app %>/**/*.js',
      tasks: ['includeSource:scripts']
    },

    stylesheets: {
      files: '<%= config.app %>/**/*.less',
      tasks: ['includeSource:stylesheets']
    },

    dev: {
      files: '<%= config.app %>/**/*.*',
      options: {
        livereload: true
      }
    }
    
  });

};
