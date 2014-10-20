module.exports = function (grunt) {
  var data = grunt.file.readJSON('app/project.json');

  grunt.registerTask('templateBower', function () {
    var bowerTemplate = grunt.file.read('framework/bower.json');
    var projectDependencies = '';
    Object.keys(data.bowerComponents).forEach(function (key) {
      projectDependencies += '"' + key + '": "'+ data.bowerComponents[key] +'",';
    });
    var bower = grunt.template.process(bowerTemplate, {
      data: {
        projectDependencies: projectDependencies
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

  grunt.registerTask('templateStylesheet', function () {
    var stylesheetTemplate = grunt.file.read('framework/app.less');
    var projectDependencies = '';

    data.stylesheets.forEach(function (filename) {
      projectDependencies += '@import "' + filename + '";';
    });

    var stylesheet = grunt.template.process(stylesheetTemplate, {
      data: {
        projectDependencies: projectDependencies
      }
    });

    grunt.file.write('.tmp/generated/app.less', stylesheet);
  });

};
