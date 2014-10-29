module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');
  grunt.config('config', {
    app: 'app',
    framework: 'templates',
    dist: 'dist',
    temp: '.tmp',
    generated: '.tmp/generated'
  });

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
    'includeSource',
  ]);

  grunt.registerTask('init', [
    'clean',
    'copy:prepareHtml',
    'templateBower',
    'bowerInstall',
    'wiredep',
    'templateAngular',
    'includeSource'
  ]);

  grunt.registerTask('serve', [
    'prepareHtml',
    'startServer',
    'watch'
  ]);

  grunt.registerTask('default', ['serve']);

};
