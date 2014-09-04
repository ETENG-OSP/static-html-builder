module.exports = {
  html: '<%= config.dist %>/**/*.html',
  options: {
    blockReplacements: {
      less: function (block) {
        return '<link rel="stylesheet" href="' + block.dest + '">';
      }
    }
  }
};
