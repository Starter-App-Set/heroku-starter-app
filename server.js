var gzippo = require('gzippo');
var express = require('express');
var cors = require('cors');
var data = require('./data.json');

var app = express();
app.use(gzippo.staticGzip("" + __dirname));
app.use(cors());

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Listening at port %d', port);

app.get('/getData', function(req, res){
	console.log("Received request");
	res.json(data);
});