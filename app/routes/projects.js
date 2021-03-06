"use strict";
const express = require('express');
const router = express.Router();
const ProjectProvider = require('../models/project');

router.get('/:slug', (req, res) => {
	const slug = req.params.slug;
	ProjectProvider.findBySlug(slug, (err, project) => {
		if(err) return err;
		//here you would render a mustache view instead of returning a json
		res.render('project', {project: project});
	});
});

router.post('/', (req, res) => {
	const project = req.body;
	ProjectProvider.addProject(project, (err, project) => {
		if(err) return err;
		return res.json(project);
	});
});

module.exports = router;

