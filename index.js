HEAD
require('dotenv').config();
console.log("🟡 .env file loaded");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("🟡 Starting MongoDB connection...");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB Connected Successfully!');
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
});
app.get('/', (req, res) => {
  res.send('API is working!');
});
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/projects', (req, res) => {
  res.json([{ id: 1, name: "Test Project" }]);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
52dd01c52d5d779a24bf328da073b58c3b304f6f
