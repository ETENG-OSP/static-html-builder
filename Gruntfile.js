module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    config: require('./config/config'),
    connect: require('./config/connect'),
    useminPrepare: require('./config/usemin-prepare'),
    usemin: require('./config/usemin'),
    includeSource: grunt.file.readJSON('config/include-source.json'),
    wiredep: require('./config/wiredep'),
    watch: grunt.file.readJSON('config/watch.json'),
    less: grunt.file.readJSON('config/less.json'),
    copy: grunt.file.readJSON('config/copy.json'),
    clean: grunt.file.readJSON('config/clean.json')
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
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'less:generated'
  ]);

  grunt.registerTask('prepareHtml', ['includeSource:dev', 'wiredep:dev']);
  grunt.registerTask('serve', ['prepareHtml', 'connect:dev', 'watch']);
  grunt.registerTask('default', ['serve']);
};
