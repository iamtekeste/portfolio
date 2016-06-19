"use strict";
var express = require('express');
var router = express.Router();
var ProjectProvider = require('../models/project');
var Mailer = require('../services/mailer');

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
router.post('/contact', (req, res) => {
	var formData = req.body;
	Mailer(formData.email, formData.name, formData.message);
	// res.json(req.body.email);
});

module.exports = router;