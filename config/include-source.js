module.exports = {
  "options": {
    "basePath": "<%= config.app %>",
    "baseUrl": "<%= config.app %>",
    "templates": {
      "html": {
        "js": "<script src=\"{filePath}\"></script>"
      }
    }
  },
  "dev": {
    "files": {
      "<%= config.framework %>/index.html": "<%= config.framework %>/index.html"
    }
  }
};
