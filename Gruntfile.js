module.exports = function (grunt) {
  'use strict';
  
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');

  grunt.initConfig({
    config: require('./config/config'),
    jshint: require('./config/jshint'),
    lineending: require('./config/lineending'),
    connect: require('./config/connect'),
    useminPrepare: require('./config/usemin-prepare'),
    usemin: require('./config/usemin'),
    includeSource: require('./config/include-source'),
    wiredep: require('./config/wiredep'),
    watch: require('./config/watch'),
    less: require('./config/less'),
    copy: require('./config/copy'),
    clean: require('./config/clean')
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
    'lineending',
    'copy:favicon',
    'templateAngular'
  ]);

  grunt.registerTask('serve', [
    'jshint',
    'prepareHtml',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('default', ['serve']);

};
