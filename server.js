var express = require('express');
var data = require('./data.json');

var app = express();

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Listening at port %d', port);

app.get('/getData', function(req, res){
	console.log("Received request");
	res.json(data);
});