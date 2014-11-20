var q = require('q');

function install(grunt) {
  var deferred = q.defer();
  grunt.util.spawn({
    cmd: 'bower',
    args: ['install'],
    opts: {
      stdio: 'inherit'
    }
  }, function (err) {
    if (err) {
      deferred.reject(err);
      return;
    }
    deferred.resolve.apply(null, arguments);
  });
  return deferred.promise;
}

function prune(grunt) {
  var deferred = q.defer();
  grunt.util.spawn({
    cmd: 'bower',
    args: ['prune'],
    opts: {
      stdio: 'inherit'
    }
  }, function (err) {
    if (err) {
      deferred.reject(err);
    }
    deferred.resolve.apply(null, arguments);
  });
  return deferred.promise;
}

module.exports = function (grunt) {

  grunt.registerTask('bowerInstall', function () {
    var done = this.async();
    install(grunt).then(function () {
      return prune(grunt);
    }).then(function () {
      done();
    }).fail(function () {
      done(false);
    });
  });

  grunt.registerTask('startServer', function () {
    var done = this.async();
    grunt.util.spawn({
      cmd: 'npm',
      args: ['start'],
      opts: {
        stdio: 'inherit'
      }
    }, function (err, result, code) {
      if (err) {
        done(false);
        return;
      }
      done();
    });
  });

};
