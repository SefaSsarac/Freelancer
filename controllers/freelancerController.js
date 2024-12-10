const Project = require('../models/Project');

// ▼ All projects ▼
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.render('index', { projects });
    } catch (err) {
        res.status(500).send('Server error while fetching projects.');
    }
};

// ▼ Render project add page ▼
exports.getAddProjectPage = (req, res) => {
    res.render('add');
};

// ▼ Handle add project operation ▼
exports.addProject = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        await Project.create({ title, description, image });
        res.redirect('/projects');
    } catch (err) {
        res.status(500).send('Server error while adding project.');
    }
};

// ▼ Handle project delete operation ▼
exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.redirect('/projects');
    } catch (err) {
        res.status(500).send('Server error while deleting project.');
    }
};
