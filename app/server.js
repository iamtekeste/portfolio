const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const projects = require('./routes/projects');

mongoose.connect('mongodb://localhost/portfolio');

app.use(bodyParser.json())
app.use('/projects', projects);
app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});	



app.listen(3000, () => {

});