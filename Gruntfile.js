'use strict';

module.exports = gruntfile;

function gruntfile(grunt) {

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
    'prepareBower',
    'copy:app',
    'copy:framework',
    'useminPrepare',
    'generated',
    'usemin'
  ]);

  grunt.registerTask('generated', [
    'concat:generated',
    'cssmin:generated',
    'ngAnnotate',
    'uglify:generated',
    'less:generated',
    'concat:useStrict'
  ]);

  grunt.registerTask('prepareHtml', [
    'template:html',
    'generateProject',
    'includeSource'
  ]);

  grunt.registerTask('prepareBower', [
    'template:bower',
    'wiredep'
  ]);

  grunt.registerTask('serve', [
    // 'jshint',
    'prepareHtml',
    'prepareBower',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('init', [
    'clean',
    'generateProject',
    'prepareHtml',
    'template:bower',
    'shell:bowerPrune',
    'shell:bowerInstall',
    'wiredep'
  ]);

  grunt.registerTask('default', ['serve']);

};
