const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    // await User.findByIdAndDelete(req.params.id);
    const user = await User.findById(req.params.id);
    res.status(200).json({
      message: `Xóa thành công '${user.username}'.`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
