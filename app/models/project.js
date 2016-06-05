const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const projectSchema =  new Schema({
	title: String,
	subtitle: String, 
	description: String,
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
ProjectProvider.addProject = function(project, cb) {
	Project.create(project, cb);
};

/**
* 
**/
module.exports = ProjectProvider;