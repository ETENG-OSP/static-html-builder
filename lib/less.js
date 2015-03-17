var path = require('path');

exports.name = 'less';
exports.createConfig = createConfig;

function createConfig(context, block) {
  var options = {};
  var basename = path.basename(block.dest);

  var files = context.inFiles.filter(function (file) {
    return path.extname(file) === '.less';
  });

  options.files = files.map(function (file) {
    context.options.generated.options = {
      sourceMapURL: basename + '.map',
      sourceMapFilename: '<%= config.dist %>/' + block.dest + '.map'
    };
    return {
      src: '<%= config.generated %>/' + file,
      dest: '<%= config.dist %>/' + block.dest
    };
  });

  return options;
}
