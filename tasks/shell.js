module.exports = function (grunt) {

  grunt.registerTask('bowerInstall', function () {
    var done = this.async();
    grunt.util.spawn({
      cmd: 'bower',
      args: ['install'],
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
    done();
  });

};
