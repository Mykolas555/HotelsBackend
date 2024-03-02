const express = require('express');
const router = express.Router();
const hotelController = require("../controllers/hotelController")
const authController = require('./../controllers/authController')
const reviewRouter = require('./../routes/reviewRoutes')
const reservationRouter = require('./../routes/reservationRoutes');

// uzprotektina visus routus
//router.use(authController.protect);

router.route("/top-5-best")
.get(hotelController.aliasTopHotels, hotelController.getAllHotels)

router.route("/hotels")
.get( hotelController.getAllHotels)
.post( authController.protect, hotelController.checkBody, hotelController.createHotel)

router.route("/:id")
.get(hotelController.getHotel)
.patch( authController.protect, hotelController.updateHotel)
.delete(
    authController.protect,
    authController.restrictTo('admin'),
    hotelController.deleteHotel)

router.use('/:hotelId/reviews', reviewRouter);

router.use('/:hotelId/:roomId/reservations', reservationRouter);

module.exports = router