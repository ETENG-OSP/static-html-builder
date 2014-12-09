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
    'templateBower',
    'wiredep',
    'templateAngular',
    'includeSource'
  ]);

  grunt.registerTask('prepareBower', [
    'templateBower',
    'bowerInstall'
  ]);

  grunt.registerTask('serve', [
    // 'jshint',
    'prepareHtml',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('init', [
    'clean',
    'copy:prepareHtml',
    'prepareBower',
    'wiredep',
    'templateAngular',
    'includeSource'
  ]);

  grunt.registerTask('default', ['serve']);

};
