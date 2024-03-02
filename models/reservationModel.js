const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema({
    from: {
        type: Date,
        required: [true, 'reservation must have time from']
    },
    to: {
        type: Date,
        required: [true, 'reservation must have time to']
    }, 
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }, 
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: "Hotel",
        required: [true, 'reservation must be linked to hotel']
    },
    room: {
        type: mongoose.Schema.ObjectId,
        ref: "Room",
        required: [true, 'reservation must have room number']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, 'resevation must be linked to user']
    }
})

reservationSchema.pre(/^find/, function(next){
    this.populate({
        path: 'hotel',
        select: 'name'
    }),
    this.populate({
        path: 'user',
        select: 'name'
    }),
    this.populate({
        path: 'room',
        select: 'room'
    });
    next();
});


const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation