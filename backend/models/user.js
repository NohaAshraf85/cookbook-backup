const mongoose = require("mongoose");

const user = new mongoose.Schema({
  // Email
  email: {
    type: String,
    required: true,
  },
  // Username
  username: {
    type: String,
    required: true,
  },
  // Password
  password: {
    type: String,
    required: true,
  },
  // Amatuer, professional, etc
  abilityLevel: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("cookbook", user);
