module.exports = {
  app: {
    expand: true,
    cwd: "<%= config.app %>",
    src: "**/*.html",
    dest: "<%= config.dist %>/"
  },
  assets: {
    expand: true,
    cwd: "<%= config.app %>/assets",
    src: "**/*",
    dest: "<%= config.dist %>/assets"
  },
  framework: {
    src: "<%= config.generated %>/index.html",
    dest: "<%= config.dist %>/index.html"
  },
  favicon: {
    src: "<%= config.framework %>/favicon.ico",
    dest: "<%= config.dist %>/favicon.ico"
  }
};
