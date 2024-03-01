const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, "Please enter a hotel review"]
    },
    rating: {
        type: Number,
        requiered: [true, "Please rate hotel"],
        min: [1, "rating must be above 1"],
        max: [5, "rating cannot be more than 5"]
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

reviewSchema.pre(/^find/, function(next){
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

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review