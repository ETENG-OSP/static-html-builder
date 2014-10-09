module.exports = {
  dev: {
    src: '<%= config.framework %>/index.html',
    exclude: [
      'less',
      'es5-shim',
      'html5shiv',
      'respond',
      'xdomain'
    ],
    ignorePath: '../'
  }
};
