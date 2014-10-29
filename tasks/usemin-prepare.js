module.exports = function (grunt) {
  var a = require('../lib/grunt/usemin-flow-less');
  console.log(a);

  grunt.config('useminPrepare', {

    html: '<%= config.dist %>/**/*.html',
    options: {
      flow: {
        steps: {
          js: ['concat', 'uglifyjs'],
          css: ['concat', 'cssmin'],
          less: [require('../lib/grunt/usemin-flow-less')],
        },
        post: {}
      }
    }

  });

};
