const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/projecttool')
  .then(async () => {
    await User.create({ username: 'admin', password: '123456' });
    console.log('✅ Dummy user created!');
    mongoose.disconnect();
  })
  .catch((err) => console.error(err));
