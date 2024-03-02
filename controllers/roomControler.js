const Room = require('../models/roomModel')
const APIFeatures = require('./../utils/apiTools')

exports.createRoom = async (req, res) =>{
    try{
        const newRoom = await Room.create(req.body)
        res.status(201).json({
            status: "success",
            message: "New room is created",
            data: {newRoom}
        })
    }catch(err){
        res.status(404).json({
            status: "fail to create room",
            message:err
        })
    }
}

exports.getAllRooms = async (req, res)=>{
    try{
        const roomsData = new APIFeatures(Room.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()
        const rooms = await roomsData.query;
        return res.status(200).json({
            status: "success",
            results: rooms.length,
            data: {rooms}
        })
    }catch(err){
        console.error(err);
        return res.status(404).json({
            status: "failed to get all rooms",
            message: err.message
        })
    }
}