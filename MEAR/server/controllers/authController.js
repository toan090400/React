const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // 1) Check if email and password exist
    if (!username || !password) {
      return next("Please provide username and password!");
    }

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
    // // 3) If everything ok, send token to client

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRWS_IN,
    });

    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

    res.cookie("jwt", token, cookieOptions);

    // // Remove password from output
    user.password = undefined;

    res.status(201).json({
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
