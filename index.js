<<<<<<< HEAD
=======
require('dotenv').config();
>>>>>>> 2fb3fb3 (Fix backend: added JWT login/signup support)
const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
=======
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

>>>>>>> 2fb3fb3 (Fix backend: added JWT login/signup support)
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

<<<<<<< HEAD
// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
=======
console.log("🟡 Starting MongoDB connection...");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully!'))
.catch((error) => console.error('❌ MongoDB connection error:', error.message));

// --------- User Schema ---------
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// --------- Routes ---------
>>>>>>> 2fb3fb3 (Fix backend: added JWT login/signup support)
app.get('/', (req, res) => {
  res.send('API is working!');
});

<<<<<<< HEAD
// MongoDB Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));
=======
// Signup
app.post('/api/users/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login
app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Sample projects route
app.get('/api/projects', (req, res) => {
  res.json([{ id: 1, name: "Test Project" }]);
});
>>>>>>> 2fb3fb3 (Fix backend: added JWT login/signup support)

// Start Server
app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`🚀 Server running on port ${PORT}`);
=======
  console.log(`🚀 Server running on http://localhost:${PORT}`);
>>>>>>> 2fb3fb3 (Fix backend: added JWT login/signup support)
});
