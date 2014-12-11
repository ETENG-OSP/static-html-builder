var bowerPath = 'templates/bower.json';
var appPath = 'templates/app-framework.js';

module.exports = function (grunt) {
  'use strict';

  var project = {
    bowerDependencies: {},
    bowerOverrides: {},
    angularModules: [],
    proxies: {},
    tutorial: true
  };

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
    grunt.file.write('.tmp/generated/app-framework.js', app);
  });

  grunt.registerTask('generateProject', function () {
    try {
      project = grunt.file.readJSON('app/project.json');
    } catch (e) {
      grunt.file.write('app/project.json', JSON.stringify(project, null, 2));
    }
  });

};
