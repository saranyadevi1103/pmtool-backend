<<<<<<< HEAD
import express from 'express';
import Task from '../models/Task.js';
const router = express.Router();

router.get('/:projectId', async (req, res) => {
  const tasks = await Task.find({ projectId: req.params.projectId });
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.patch('/:id/toggle', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

export default router;
=======
import express from 'express';
import Task from '../models/Task.js';
const router = express.Router();

router.get('/:projectId', async (req, res) => {
  const tasks = await Task.find({ projectId: req.params.projectId });
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.patch('/:id/toggle', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

export default router;
>>>>>>> 52dd01c52d5d779a24bf328da073b58c3b304f6f
