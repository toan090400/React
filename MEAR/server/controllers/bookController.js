const Book = require("../models/bookModel");
const fs = require("fs");
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate({
        path: "category",
        select: "-__v",
      })
      .populate({
        path: "user",
        select: "-__v",
      });

    res.status(200).json(books);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate({
      path: "category",
      select: "-__v",
    });
    //   .populate({
    //     path: "user",
    //     select: "-__v",
    //   });

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json(error);
  }
};
// ảnh local(1,nhiều)
// exports.createBookLocal = async (req, res) => {
//   try {
//     const createBook = await new Book({
//       name: req.body.name,
//       user: req.body.user,
//       category: req.body.category,
//       status: req.body.status,
//       // 1 ảnh
//       // image: req.file.filename,
//       // nhiều ảnh
//       image: req.files,
//     });
//     const newBook = await createBook.save();
//     res.status(200).json({
//       newBook,
//       message: "Thêm mới thành công",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// };
// exports.updateBookLocal = async (req, res) => {
//   try {
//     // 1 ảnh
//     // if (req.file) {
//     //   const book = await Book.findById(req.params.id);
//     //   fs.unlink(`../ui/public/assets/image_book/${book.image}`, (err) => {
//     //     return console.log(err);
//     //   });
//     //   book.image = req.file.filename;
//     //   const newImage = await book.save();
//     // }
//     // nhiều ảnh
//     if (req.files) {
//       const book = await Book.findById(req.params.id);
//       const images = book.image;
//       images.forEach((i) => {
//         const deleteImages = i.filename;
//         console.log(deleteImages);
//         fs.unlink(`../ui/public/assets/images/${deleteImages}`, (err) => {
//           return console.log(err);
//         });
//       });
//       book.image = req.files;
//       const newImage = await book.save();
//     }
//     console.log("no run");
//     const UpdateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       UpdateBook,
//       message: "Cập nhập thành công!",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// };
// exports.deleteBookLocal = async (req, res) => {
//   try {
//     // nhiều ảnh
//     const book = await Book.findByIdAndDelete(req.params.id);
//     const images = book.image;
//     images.forEach((i) => {
//       const deleteImages = i.filename;
//       console.log(deleteImages);
//       fs.unlink(`../ui/public/assets/images/${deleteImages}`, (err) => {
//         return console.log(err);
//       });
//     });
//     // 1 local
//     // const book = await Book.findByIdAndDelete(req.params.id);
//     // fs.unlink(`../ui/public/assets/image_book/${book.image}`, (err) => {
//     //   return console.log(err);
//     // });
//     res.status(200).json({
//       status: "Xóa thành công",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// };
// lưu 1 ảnh google drive -------------------------------------------------------------
const googleApis = require("googleapis");
const oauth2Client = new googleApis.google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});
const drive = googleApis.google.drive({
  version: "v3",
  auth: oauth2Client,
});
exports.createBookGoogle = async (req, res) => {
  try {
    // --------------------- 1 ảnh -----------------------------------
    // const folder = await drive.files.create({
    //   requestBody: {
    //     name: req.body.name,
    //     mimeType: "application/vnd.google-apps.folder",
    //   },
    // });
    const image = await drive.files.create({
      requestBody: {
        name: req.file.originalname,
        mimeType: "image/jpg",
        // parents: ["1zljnspsnHgVtq1qBfZ_1adcTlQLMYfML"],
        // parents: [folder.data.id],
      },
      media: {
        mimeType: "image/jpg",
        body: fs.createReadStream(req.file.path),
      },
    });
    const imageId = image.data.id;
    await drive.permissions.create({
      fileId: imageId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    await drive.files.get({
      fileId: imageId,
      fields: "webContentLink, webViewLink",
    });
    // const images = req.files;
    const createBook = await new Book({
      name: req.body.name,
      user: req.body.user,
      category: req.body.category,
      status: req.body.status,
      // 1 ảnh
      image: image.data,
    });
    const newBook = await createBook.save();
    res.status(200).json({
      newBook,
      message: "Thêm mới thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.updateBookGoogle = async (req, res) => {
  try {
    if (req.file) {
      const book = await Book.findById(req.params.id);
      await drive.files.delete({
        fileId: book.image.id,
      });
      const image = await drive.files.create({
        requestBody: {
          name: req.file.originalname,
          mimeType: "image/jpg",
        },
        media: {
          mimeType: "image/jpg",
          body: fs.createReadStream(req.file.path),
        },
      });
      const imageId = image.data.id;
      await drive.permissions.create({
        fileId: imageId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });
      await drive.files.get({
        fileId: imageId,
        fields: "webContentLink, webViewLink",
      });
      book.image = image.data;
      await book.save();
    }
    const UpdateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      UpdateBook,
      message: "Cập nhập thành công!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.deleteBookGoogle = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    await drive.files.delete({
      fileId: book.image.id,
    });
    res.status(200).json({
      status: "Xóa thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
