var path = require('path');

exports.name = 'ngAnnotate';
exports.createConfig = createConfig;

function createConfig(context, block) {
  var cfg = {};
  context.outFiles = [];

  cfg.files = context.inFiles.map(function (file) {
    context.outFiles.push(file);
    return {
      src: [path.join(context.inDir, file)],
      dest: path.join(context.outDir, file)
    };
  });

  // console.log(JSON.stringify(cfg, null, 2));
  // console.log(JSON.stringify(cfg));
  console.log('===============');
  console.log(context);

  return cfg;
}
