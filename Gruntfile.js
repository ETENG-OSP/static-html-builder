module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    config: {
      app: 'app',
      generated: '.tmp/generated',
      dist: 'dist',
      temp: '.tmp',
      framework: 'templates'
    },
  });
  grunt.loadTasks('tasks');

  grunt.registerTask('build', [
    'clean',
    'prepareBower',
    'prepareHtml',
    'copy:app',
    'copy:framework',
    'useminPrepare',
    'generated',
    'usemin'
  ]);

  grunt.registerTask('generated', [
    'concat',
    'cssmin',
    'uglify',
    'less'
  ]);

  grunt.registerTask('prepareHtml', [
    'copy:prepareHtml',
    'templateAngular',
    'includeSource'
  ]);

  grunt.registerTask('prepareBower', [
    'templateBower',
    'wiredep'
  ]);

  grunt.registerTask('serve', [
    // 'jshint',
    'prepareHtml',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('init', [
    'clean',
    'templateBower',
    'bowerInit',
    'wiredep',
    'prepareHtml'
  ]);

  grunt.registerTask('default', ['serve']);

};
