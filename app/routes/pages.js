"use strict";
var express = require('express');
var router = express.Router();
var ProjectProvider = require('../models/project');

router.get('/', (req, res) => {
	ProjectProvider.findAll((err, projects) => {
		if(err) return err;
		res.render('home', {active_home:true, projects: projects});
	});
});

router.get('/about', (req, res) => {
	res.render('about', {active_about: true});
});

router.get('/contact', (req, res) => {
	res.render('contact', {active_contact: true});
});

module.exports = router;