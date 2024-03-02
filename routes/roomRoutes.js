const express = require('express');
const router = express.Router({ mergeParams:true } );
const roomController = require("../controllers/roomControler")


router.route("/room")
.get( roomController.getAllRooms)
.post( roomController.createRoom)

module.exports = router