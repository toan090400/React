const Category = require("../models/categoryModel");
const Book = require("../models/bookModel");

exports.getAllBook = async (req, res) => {
  try {
    const page_size = 1; // 1 trang hiện bao nhiêu sản phẩm
    const page = parseInt(req.query.page || "1");
    const total = await Book.countDocuments(); // đếm xem có bao nhiêu item hiện có
    const page_total = Math.ceil(total / page_size); // đếm xem mình sẽ có bao nhiêu trang
    const book = await Book.find()
      .limit(page_size)
      .skip(page_size * (page - 1));
    res.status(200).json({
      page_total,
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
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
exports.getSearch = async (req, res) => {
  try {
    const book = await Book.find({
      $or: [
        {
          name: { $regex: req.query.search },
        },
        {
          status: { $regex: req.query.search },
        },
      ],
    });

    res.status(200).json({
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
// exports.getSearchPagination = async (req, res) => {
//   try {
//     const page_size = 3; // 1 trang hiện bao nhiêu sản phẩm
//     const page = parseInt(req.query.page || "0");
//     console.log(page);
//     const search = req.query.search || "";
//     const total = await Book.countDocuments({
//       $or: [
//         {
//           name: { $regex: search },
//         },
//         {
//           status: { $regex: search },
//         },
//       ],
//     }); // đếm xem có bao nhiêu item hiện có
//     const page_total = Math.ceil(total / page_size); // đếm xem mình sẽ có bao nhiêu trang
//     const book = await Book.find({
//       $or: [
//         {
//           name: { $regex: search },
//         },
//         {
//           status: { $regex: search },
//         },
//       ],
//     })
//       .limit(page_size)
//       .skip(page_size * page);

//     res.status(200).json({
//       page,
//       page_total,
//       total,
//       search,
//       book,
//     });
//     // -----------------------------------
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// };
