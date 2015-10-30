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
      dest: '<%= config.dist %>'
    },

    bootstrapFonts: {
      expand: true,
      cwd: 'bower_components/bootstrap/dist',
      src: 'fonts/*',
      dest: '<%= config.dist %>'
    },

    fontawesomeFonts: {
      expand: true,
      cwd: 'bower_components/font-awesome',
      src: 'fonts/*',
      dest: '<%= config.dist %>'
    },

    ioniconFonts: {
      expand: true,
      cwd: 'bower_components/font-awesome',
      src: 'fonts/*',
      dest: '<%= config.dist %>'
    },

    icomoonFonts: {
      expand: true,
      cwd: 'bower_components/icomoon',
      src: 'fonts/*',
      dest: '<%= config.dist %>'
    },

    framework: {
      src: "<%= config.generated %>/index-framework.html",
      dest: "<%= config.dist %>/index.html"
    }

  });
};
