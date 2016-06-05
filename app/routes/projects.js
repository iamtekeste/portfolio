"use strict";
const express = require('express');
const router = express.Router();
const ProjectProvider = require('../models/project');

router.get('/:title', (req, res) => {
	const title = req.params.title;
	ProjectProvider.findByTitle(title, (err, project) => {
		if(err) return err;
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

module.exports = router;

