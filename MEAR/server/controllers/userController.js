const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.createUser = async (req, res) => {
  try {
    const username = await User.findOne({ username: req.body.username });
    if (username) {
      return res.status(201).json({
        message: "Tài khoản đã tồn tại.",
      });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const newUser = await User.create(req.body);
    res.status(201).json({
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.updateUser = async (req, res) => {
  try {
    const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      newUser,
      message: "Cập nhập thành công!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
// exports.deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);

//     res.status(200).json({
//       status: "Xóa thành công",
//     });
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };
