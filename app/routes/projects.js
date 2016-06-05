"use strict";
const express = require('express');
const router = express.Router();
const ProjectProvider = require('../models/project');

router.get('/:title', (req, res) => {
	const title = req.params.title;
	ProjectProvider.findByTitle(title, (err, project) => {
		if(err) return err;
		//here you would render a mustache view instead of returning a json
		return res.json(project);
	});
});

router.post('/', (req, res) => {
	const project = req.body;
	ProjectProvider.addProject(project, (err, project) => {
		if(err) return err;
		return res.json(project);
	});
});

router.get('/', (req, res) => {
	ProjectProvider.findAll((err, projects) => {
		if(err) return err;

		//here you would render a mustache view instead of returning a json
		res.json(projects);
	});
});

module.exports = router;

