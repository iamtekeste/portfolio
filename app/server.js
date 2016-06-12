const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const projects = require('./routes/projects');
const pages = require('./routes/pages');

mongoose.connect('mongodb://localhost/portfolio');

/** Setup express handlebars **/
var hbs = exphbs.create({
	defaultLayout: 'main',
	layoutsDir: "app/views/layouts",
	partialsDir: ['app/views/partials'],
	menu: ['Projects'],
	helpers: {
	    section: function(name, options){
	        if(!this._sections) this._sections = {};
	        this._sections[name] = options.fn(this);
	        return null;
	    }
	}
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

/** -- End --  **/
app.use(express.static(__dirname));
app.use(bodyParser.json())

app.use('/', pages);

app.use('/projects', projects);

app.listen(3000, () => {
	console.log('listening on http://localhost:3000');
});