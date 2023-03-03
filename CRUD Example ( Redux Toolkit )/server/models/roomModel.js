const mongoose = require("mongoose");
const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Room = (module.exports = mongoose.model("rooms", RoomSchema));
