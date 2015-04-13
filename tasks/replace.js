module.exports = function (grunt) {

  grunt.config('replace', {
    ngTemplate: {
      files: [{
        src: ['<%= config.dist %>/index.html'],
        dest: '<%= config.dist %>/index.html'
      }],
      options: {
        patterns: [{
          match: /<!-- templates -->/,
          replacement: function () {
            return grunt.file.read('.tmp/ngTemplate/concat.html');
          }
        }]
      }
    },
  });

};
