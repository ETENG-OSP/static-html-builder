module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');
  grunt.config('config', {
    app: 'app',
    framework: 'framework',
    dist: 'dist',
    temp: '.tmp',
    generated: '.tmp/generated'
  });

  grunt.registerTask('build', [
    'clean',
    'prepareHtml',
    'copy',
    'useminPrepare',
    'generated',
    'usemin'
  ]);

  grunt.registerTask('generated', [
    'concat',
    'cssmin',
    'uglify',
    'copy:less',
    'less',
    'clean:less'
  ]);

  grunt.registerTask('prepareHtml', [
    'copy:prepareHtml',
    'includeSource',
    'templateBower',
    'wiredep',
    'templateAngular'
  ]);

  grunt.registerTask('serve', [
    'prepareHtml',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('default', ['serve']);

};
