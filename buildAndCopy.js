var spawn = require('child_process').spawn;
var fs = require('fs');
var ncp = require('ncp');

var configFile = 'config.user.js';
var source = 'dist';

var template = JSON.stringify({target: 'builder-release'});

var build = spawn('grunt', ['build']);
build.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});

build.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

build.on('close', function(code) {
  console.log('child process exited with code ' + code);
  var jsonString;
  var config;
  try {
    jsonString = fs.readFileSync(configFile);
  } catch (err) {
    jsonString = template;
    fs.writeFileSync(configFile, template);
  }
  target = JSON.parse(jsonString).target;
  ncp(source, target, function(err) {
    if (err) throw err;
    console.log('done');
  });
});
