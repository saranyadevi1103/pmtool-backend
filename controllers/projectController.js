<<<<<<< HEAD
const Project = require('../models/project');

const createProject = async (req, res) => {
  try {
    const { name, description, deadline, status, teamMembers } = req.body;
    const project = new Project({ name, description, deadline, status, teamMembers });
    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createProject };
=======
const Project = require('../models/project');

const createProject = async (req, res) => {
  try {
    const { name, description, deadline, status, teamMembers } = req.body;
    const project = new Project({ name, description, deadline, status, teamMembers });
    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createProject };
>>>>>>> 52dd01c52d5d779a24bf328da073b58c3b304f6f
