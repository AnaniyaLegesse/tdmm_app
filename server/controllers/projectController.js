const Project = require('../models/projectModel');
const mongoose = require('mongoose');

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

// Get a single project
const getProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project' });
    }

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ error: 'No such project' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch project' });
    }
};

// Create a new project
const createProject = async (req, res) => {
    const { name, budget } = req.body;

    try {
        const project = await Project.create({ name, budget });
        res.status(201).json({ project });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a project
const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project' });
    }

    try {
        const project = await Project.findOneAndDelete({ _id: id });
        if (!project) {
            return res.status(404).json({ error: 'No such project' });
        }
        res.status(200).json({ message: 'Project deleted successfully', project });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
};

// Update a project
const updateProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project' });
    }

    try {
        const project = await Project.findOneAndUpdate({ _id: id }, {
            ...req.body
        }, { new: true });

        if (!project) {
            return res.status(404).json({ error: 'No such project' });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update project' });
    }
};

module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
};
