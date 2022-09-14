var express = require("express");
var router = express.Router();

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  // lưu ảnh local
  // destination: function (req, file, cb) {
  //   cb(null, "../ui/public/assets/image_book");
  // },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

const bookController = require("./../controllers/bookController");

router
  .route("/")
  .get(bookController.getAllBooks)
  // lưu ảnh local
  // .post(upload.single("image"), bookController.createBookLocal);
  // lưu ảnh trên google drive
  .post(upload.single("image"), bookController.createBookGoogle);

router
  .route("/:id")
  .get(bookController.getBook)
  // lưu ảnh local
  // .patch(upload.single("image"), bookController.updateBookLocal)
  // .delete(bookController.deleteBookLocal);
  // lưu ảnh trên google drive
  .patch(upload.single("image"), bookController.updateBookGoogle)
  .delete(bookController.deleteBookGoogle);

module.exports = router;
