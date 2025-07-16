const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Create Project
router.post('/create-project', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newProject = new Project({ title, description });
    await newProject.save();
    res.json({ success: true, message: "Project created", project: newProject });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error creating project" });
  }
});

// Get All Projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, projects });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching projects" });
  }
});

// Delete Project
router.delete('/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting project" });
  }
});

// Update Project
router.put('/projects/:id', async (req, res) => {
  try {
    const { title, description } = req.body;
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    res.json({ success: true, project: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error updating project" });
  }
});

module.exports = router;
