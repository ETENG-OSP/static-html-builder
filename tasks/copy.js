module.exports = function (grunt) {

  grunt.config('copy', {

    app: {
      expand: true,
      cwd: "<%= config.app %>",
      src: "**/*.html",
      dest: "<%= config.dist %>/"
    },

    images: {
      expand: true,
      cwd: '<%= config.app %>',
      src: '**/*.png',
      dest: '<%= config.dist %>'
    },

    framework: {
      src: "<%= config.generated %>/index.html",
      dest: "<%= config.dist %>/index.html"
    },

    less: {
      src: '<%= config.generated %>/app.less',
      dest: '<%= config.app %>/app.less'
    },

    prepareHtml: {
      src: '<%= config.framework %>/index.html',
      dest: '<%= config.generated %>/index.html'
    }

  });
};
