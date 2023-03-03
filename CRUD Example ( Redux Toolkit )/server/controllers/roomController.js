const Room = require("../models/roomModel");

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({ rooms });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    res.status(200).json({ room });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.createRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    res.status(200).json({
      newRoom,
      message: "Thêm mới thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.updateRoom = async (req, res) => {
  try {
    const newRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      newRoom,
      message: "Cập nhập thành công!",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Xóa thành công",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
