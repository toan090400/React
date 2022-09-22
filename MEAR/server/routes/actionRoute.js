var express = require("express");
var router = express.Router();

const actionController = require("./../controllers/actionController");

router.get("/book", actionController.getAllBook);
router.get("/book/:id", actionController.getBook);
router.get("/category/:id", actionController.getCategory);
router.get("/search", actionController.getSearch);
// router.get("/search", actionController.getSearchPagination);

module.exports = router;
