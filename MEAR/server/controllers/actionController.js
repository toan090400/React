const Category = require("../models/categoryModel");
const Book = require("../models/bookModel");

exports.getCategory = async (req, res) => {
  try {
    const book = await Book.find({ category: req.params.id });
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      category,
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
