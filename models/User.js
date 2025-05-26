// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// module.exports = mongoose.model('User', userSchema);


// ✅ STEP 1: User Model (models/User.js)
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
