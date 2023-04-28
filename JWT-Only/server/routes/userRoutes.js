var express = require("express");
var router = express.Router();
const userController = require("./../controllers/userController");
const middlewareController = require("./../controllers/middlewareController");

router.get("/", userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(middlewareController.checkAdmin, userController.deleteUser);

module.exports = router;
