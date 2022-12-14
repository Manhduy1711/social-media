const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please tell me your name"],
  },
  email: {
    type: String,
    required: [true, "Please tell your email"],
  },
  password: {
    type: String,
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
