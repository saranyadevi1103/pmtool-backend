<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);

module.exports = router;
>>>>>>> 52dd01c52d5d779a24bf328da073b58c3b304f6f
