const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    room: {
        type: Number,
        required: [true, "Room must have number"]
    },
    description: {
        type: String,
        requiered: [true, "Room must have description"]
    },
    necessities: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: "Hotel",
        required: [true, 'review must be linked to hotel']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, 'review must be linked to user']
    }
})

roomSchema.pre(/^find/, function(next){
    this.populate({
        path: 'hotel',
        select: 'name'
    }),
    this.populate({
        path:'user',
        select: 'name'
    })
    next()
})

const Room = mongoose.model("Room", roomSchema);

module.exports = Room