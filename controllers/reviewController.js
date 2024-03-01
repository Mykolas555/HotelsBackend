const Review = require('../models/reviewModel')

exports.getReviews = async (req, res) => {
    try {
        const filter = { hotel: req.params.hotelId };
        //let filter = {}
        //if(!req.params.hotelId) filter = {hotel: req.params.hotelId}
        const reviews = await Review.find(filter);
        return res.status(200).json({
            status: "success",
            data: { reviews }
        });
    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.createReview = async (req, res) => {
    try {
        if(!req.body.hotel) req.body.hotel = req.params.hotelId;
        if(!req.body.user) req.body.user = req.user.id;
        const newReview = await Review.create(req.body);
        res.status(201).json({
            status: "success",
            message: "New review is created",
            data: { newReview }
        });
    } catch (err) {
        console.error(err);
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};