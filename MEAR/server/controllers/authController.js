const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // 2) Check if user exists && password is correct
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      return res.status(404).json({
        message: "Incorrect username",
      });
    }

    const correct = await bcrypt.compare(password, user.password);
    if (!correct) {
      return res.status(404).json({
        message: "Incorrect password",
      });
    }

    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
