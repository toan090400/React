var express = require("express");
var router = express.Router();

const roomController = require("./../controllers/roomController");
router
  .route("/")
  .get(roomController.getAllRooms)
  .post(roomController.createRoom);

router
  .route("/:id")
  .get(roomController.getRoom)
  .patch(roomController.updateRoom)
  .delete(roomController.deleteRoom);

// router.get("/", roomController.getAllItems);

module.exports = router;
