var express = require("express");
var router = express.Router();

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  // lưu 1 ảnh local
  // destination: function (req, file, cb) {
  //   cb(null, "../ui/public/assets/image_book");
  // },
  // lưu nhiều ảnh local
  // destination: function (req, file, cb) {
  //   cb(null, "../ui/public/assets/images");
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
  // lưu 1 ảnh local
  // .post(upload.single("image"), bookController.createBookLocal);
  // lưu nhiều ảnh local
  // .post(upload.array("image"), bookController.createBookLocal);
  // lưu ảnh trên google drive
  .post(upload.single("image"), bookController.createBookGoogle);
// lưu nhiều trên google drive
// .post(upload.array("image"), bookController.createBookGoogle);

router
  .route("/:id")
  .get(bookController.getBook)
  // // lưu 1 ảnh local
  // .patch(upload.single("image"), bookController.updateBookLocal)
  // .delete(bookController.deleteBookLocal);
  // lưu nhiều ảnh local
  // .patch(upload.array("image"), bookController.updateBookLocal)
  // .delete(bookController.deleteBookLocal);
  // lưu 1 ảnh trên google drive
  // .patch(upload.single("image"), bookController.updateBookGoogle)
  .delete(bookController.deleteBookGoogle);

module.exports = router;
