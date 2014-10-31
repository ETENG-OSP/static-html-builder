var express = require('express');
var app = express();
var port = 9000;
app.listen(port, function () {
  console.log('server started on http://127.0.0.1:' + port);
});

app.use('/bower_components', express.static(__dirname + '/../bower_components'));
app.use(express.static(__dirname + '/../.tmp/generated'));
app.use(express.static(__dirname + '/../app'));
