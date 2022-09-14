const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    /*
    trim: bỏ 2 khoảng cách đầu và cuối
    vd: " data " => "data"
    */
    name: { type: String, trim: true },
    description: { type: String, trim: true },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Category = (module.exports = mongoose.model("Category", CategorySchema));
