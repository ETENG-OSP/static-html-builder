module.exports = function (grunt) {

  grunt.config('copy', {

    app: {
      expand: true,
      cwd: '<%= config.app %>',
      src: [
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.gif',
        '**/*.svg'
      ],
      dest: "<%= config.dist %>"
    },

    framework: {
      src: "<%= config.generated %>/index-framework.html",
      dest: "<%= config.dist %>/index.html"
    }

  });
};
