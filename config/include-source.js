module.exports = {
  options: {
    basePath: '<%= config.app %>',
    baseUrl: '<%= config.app %>',
    templates: {
      html: {
        js: '<script src="{filePath}"></script>'
      }
    }
  },
  scripts: {
    files: {
      '<%= config.generated %>/index.html': '<%= config.generated %>/index.html'
    }
  },
  stylesheets: {
    files: {
      '<%= config.generated %>/app.less': '<%= config.framework %>/app.less'
    }
  }
};
