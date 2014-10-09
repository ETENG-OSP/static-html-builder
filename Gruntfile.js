module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    config: require('./config/config'),
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
    'usemin',
    'clean:temp'
  ]);

  grunt.registerTask('generated', [
    'concat',
    'cssmin',
    'uglify',
    'less'
  ]);

  grunt.registerTask('prepareHtml', [
    'includeSource',
    'wiredep',
    'lineending'
  ]);

  grunt.registerTask('serve', [
    'prepareHtml',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('default', ['serve']);
};
