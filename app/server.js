var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});	
app.get('/project.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/project.html'));
});
app.get('/about.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/contact.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/contact.html'));
});

app.listen(3000, function(){

});