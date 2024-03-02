const Reservation = require('../models/reservationModel')

exports.createReservation = async (req, res) =>{
    try{
        const newReservation = await Reservation.create(req.body)
        res.status(201).json({
            status: "success",
            message: "New room reservation created",
            data: {newReservation}
        })
    }catch(err){
        res.status(404).json({
            status: "fail to create reservation",
            message:err
        })
    }
}

exports.getReservationsByHotelAndRoom = async (req, res) => {
    try {
        const filterHotel = { hotel: req.params.hotelId };
        const filterRoom = { room: req.params.roomId };
        //let filter = {}
        //if(!req.params.hotelId) filter = {hotel: req.params.hotelId}
        const reservation = await Reservation.find( filterHotel, filterRoom);
        return res.status(200).json({
            status: "success",
            data: { reservation }
        });
    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: err
        });
    }
};