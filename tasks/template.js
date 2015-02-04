var bowerPath = 'templates/bower.json';
var appPath = 'templates/app-framework.js';
var htmlPath = 'templates/index-framework.html';

module.exports = function (grunt) {
  'use strict';

  var project;

  try {
    project = grunt.file.readJSON('app/project.json');
  } catch (e) {
    project = {
     name: 'Static HTML App',
     main: 'app',
     dependencies: {
       'angular-route': '~1.3'
     },
     overrides: {
       marked: 'lib/marked.js'
     },
     proxies: {
       '/api': 'http://localhost:8080'
     }
   };
  }


  grunt.registerTask('templateBower', function () {
    var bowerTemplate = grunt.file.read(bowerPath);
    var bower = grunt.template.process(bowerTemplate, {
      data: project
    });
    grunt.file.write('bower.json', bower);
  });

  grunt.registerTask('templateHtml', function () {
    grunt.file.write(
      '.tmp/generated/index-framework.html',
      grunt.template.process(
        grunt.file.read(htmlPath),
        { data: project }
      )
    );
  });

  grunt.registerTask('generateProject', function () {
    try {
      project = grunt.file.readJSON('app/project.json');
    } catch (e) {
      grunt.file.write('app/project.json', JSON.stringify(project, null, 2));
    }
  });

};
