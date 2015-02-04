var q = require('q');
var fs = require('fs');

module.exports = function (grunt) {

  var writeProject = function (content) {
    return q.nfbind(fs.writeFile)(__dirname + '/../app/project.json', content);
  };

  var readProject = function () {
    return q.nfbind(fs.readFile)(__dirname + '/../app/project.json');
  };

  var bowerInstall = q.nfbind(grunt.util.spawn, {
    cmd: 'bower',
    args: ['install'],
    opts: {
      stdio: 'inherit'
    }
  });

  var bowerPrune = q.nfbind(grunt.util.spawn, {
    cmd: 'bower',
    args: ['install'],
    opts: {
      stdio: 'inherit'
    }
  });

  var install = function (packageName) {
    return q.nfbind(grunt.util.spawn, {
      cmd: 'bower',
      args: ['install', packageName],
      opts: {
        stdio: 'inherit'
      }
    })();
  };

  grunt.registerTask('bowerInit', function () {
    var done = this.async();
    bowerInstall().then(function () {
      return bowerPrune();
    }).then(function () {
      done();
    }).fail(function () {
      done(false);
    });
  });

  grunt.registerTask('install', function (packageName) {
    var done = this.async();
    q.all([
      readProject(),
      install(packageName)
    ]).spread(function (raw) {
      var project = JSON.parse(raw.toString());
      project.dependencies[packageName] = '*';
      return writeProject(JSON.stringify(project, null, 2));

    }).then(function () {
      done();
    }).fail(function (error) {
      console.log(error);
      done(false);
    });
  });

};
