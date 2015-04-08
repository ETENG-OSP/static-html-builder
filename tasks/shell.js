module.exports = function (grunt) {

  grunt.config('shell', {

    bowerInstall: {
      command: 'bower install'
    },

    bowerPrune: {
      command: 'bower prune'
    }

  });

};
