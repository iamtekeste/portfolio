"use strict";
const express = require('express');
const router = express.Router();
const ProjectProvider = require('../models/project');

router.post('/', (req, res) => {
	const project = req.body;
	ProjectProvider.addProject(project, (err, project) => {
		if(err) return err;
		return res.json(project);
	});
});

module.exports = router;

