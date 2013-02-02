var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
var args = process.argv.splice(2);
var filename = args[0] + '.html';
console.log('Serving ' + filename);

app.get('/', function(req, res) {
  res.render(filename);
});

var port = 8080;
app.listen(port);
