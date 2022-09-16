var express = require("express");
var router = express.Router();

const actionController = require("./../controllers/actionController");

router.get("/category/:id", actionController.getCategory);

module.exports = router;
