var express = require('express');
var http = require('http')
var app = express();
var PORT = 3000;



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/kissmangalist', function(req, res){
	res.send('kissmangalist here');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});