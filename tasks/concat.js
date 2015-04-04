module.exports = function (grunt) {

  grunt.config('concat', {
    options: {
      banner: '\'use strict\';',
      process: function (src, filepath) {
        return '(function(){\n' + src + '\n})();';
      }
    }
  });

};
