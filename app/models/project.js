const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const projectSchema =  new Schema({
	title: String,
	subtitle: String, 
	description: String,
	slug: String,
	tags: Array,
	thumnail: String,
	screenshots: Array,
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
});

const Project = mongoose.model('Project', projectSchema);

var ProjectProvider = {};

/**
* Save new project. Responds to POST request
**/
ProjectProvider.addProject = (project, cb) => {
	Project.create(project, cb);
};

/**
* Find project by title
**/
ProjectProvider.findBySlug = (slug, cb) => {
	Project.findOne({slug: slug}, cb);
};

/**
* Find all Projects
**/
ProjectProvider.findAll = (cb) => {
	Project.find(cb);
};

module.exports = ProjectProvider;