var bowerPath = 'templates/bower.json';
var appPath = 'templates/app-framework.js';
var htmlPath = 'templates/index-framework.html';

module.exports = function (grunt) {

  var project;

  try {
    project = grunt.file.readJSON('app/project.json');
  } catch (e) {
    project = grunt.file.readJSON('templates/project.json');
  }

  grunt.config('template', {

    bower: {
      files: {
        'bower.json': 'templates/bower.json'
      },
      options: {
        data: project
      }
    },

    html: {
      files: {
        '.tmp/generated/index-framework.html': 'templates/index-framework.html'
      },
      options: {
        data: project
      }
    }

  });

  grunt.registerTask('generateProject', function () {
    try {
      project = grunt.file.readJSON('app/project.json');
    } catch (e) {
      grunt.file.write('app/project.json', JSON.stringify(project, null, 2));
      grunt.file.write('app/app.urgent.js', grunt.file.read('templates/app.urgent.js'));
    }
  });

};
