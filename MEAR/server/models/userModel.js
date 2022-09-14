const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    /*
    trim: bỏ 2 khoảng cách đầu và cuối
    vd: " data " => "data"
    */
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: Number, trim: true },
    username: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = (module.exports = mongoose.model("User", UserSchema));
