const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema(
  {
    /*
    trim: bỏ 2 khoảng cách đầu và cuối
    vd: " data " => "data"
    */
    name: { type: String, trim: true },
    image: { type: Object, trim: true },
    imageLink: {
      type: String,
      trim: true,
      default: "https://lh3.googleusercontent.com/d",
    },
    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Book = (module.exports = mongoose.model("Book", BookSchema));
