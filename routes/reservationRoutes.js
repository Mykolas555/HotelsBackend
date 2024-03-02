const express = require('express');
const router = express.Router({ mergeParams: true });
const reservationController = require("../controllers/reservationController");

router.route("/")
  .get(reservationController.getReservationsByHotelAndRoom)
  .post(reservationController.createReservation);

module.exports = router;
