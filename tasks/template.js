var bowerPath = 'templates/bower.json';
var appPath = 'templates/app.js';

module.exports = function (grunt) {
  'use strict';

  var project = grunt.file.readJSON('app/project.json');

  grunt.registerTask('templateBower', function () {
    var bowerTemplate = grunt.file.read(bowerPath);
    var bower = grunt.template.process(bowerTemplate, {
      data: project
    });
    grunt.file.write('bower.json', bower);
  });

  grunt.registerTask('templateAngular', function () {
    var appTemplate = grunt.file.read(appPath);
    var app = grunt.template.process(appTemplate, {
      data: project
    });
    grunt.file.write('.tmp/generated/app.js', app);
  });

};
