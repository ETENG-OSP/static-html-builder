var q = require('q');

module.exports = function (grunt) {

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

  grunt.registerTask('bowerInstall', function () {
    var done = this.async();
    bowerInstall().then(function () {
      return bowerPrune();
    }).then(function () {
      done();
    }).fail(function () {
      done(false);
    });
  });

};
