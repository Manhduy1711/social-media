const User = require("./../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({
      status: "success",
      users,
    });
  } catch (err) {
    res.json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.CreateUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({
      status: "success",
      newUser,
    });
  } catch (err) {
    res.json({
      status: "fail",
      message: err.message,
    });
  }
};
