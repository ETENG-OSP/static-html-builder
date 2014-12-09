module.exports = function (grunt) {
  'use strict';
  var data = grunt.file.readJSON('app/project.json');
  
  grunt.registerTask('templateBower', function () {
    var bowerTemplate = grunt.file.read('framework/bower.json');
    var projectDependencies = '';
    Object.keys(data.bowerDependencies).forEach(function (key) {
      projectDependencies += '"' + key + '": "'+ data.bowerDependencies[key] +'",';
    });
    var bower = grunt.template.process(bowerTemplate, {
      data: {
        projectDependencies: projectDependencies,
        projectOverrides: JSON.stringify(data.bowerOverrides)
      }
    });
    grunt.file.write('bower.json', JSON.stringify(JSON.parse(bower), null, 2));
  });

  grunt.registerTask('templateAngular', function () {
    var appTemplate = grunt.file.read('framework/app.js');
    var projectDependencies = '';

    data.angularModules.forEach(function (moduleName) {
      projectDependencies += '\'' + moduleName + '\',';
    });

    var app = grunt.template.process(appTemplate, {
      data: {
        projectDependencies: projectDependencies
      }
    });

    grunt.file.write('.tmp/generated/app.js', app);
  });

};
