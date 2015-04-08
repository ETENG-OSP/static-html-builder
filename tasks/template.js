var bowerPath = 'templates/bower.json';
var appPath = 'templates/app-framework.js';
var htmlPath = 'templates/index-framework.html';

module.exports = function (grunt) {

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
    }
  });

};
