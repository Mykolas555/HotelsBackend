const mongoose = require("mongoose")
const User = require("./userModel")

const hotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "A hotel must have a name"],
        unique: true,
    },
    address:{
        type:String,
        required:[true, 'must have an address'],
    },
    rankingAverage:{
        type:Number,
        default:4.5,
        min:[1, "ranking must be above 1"],
        max:[5, "ranking cannot be more than 5"]
    },
    room_price:{
        type:Number,
        required:[true, "A hotel must have a price"]
    },
    price_discount:{
        type:Number
    },
    comfort:{
        type:String,
        required:[true, 'a hotel must have  confort level'],
        enum:{
            values:["1", "2", "3", "4", "5", "6", "7"]
        }
    },
    summary:{
        type:String,
        trim: true,
        required: [true, "must have a summary"]
    },
    description:{
        type:String,
        trim: true
    },
    image_cover:{
        type:String,
        required:[true, "musta have a image cover"]
    },
    //kopijamimo budas embedinimas
    //managers: Array,
    managers: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false
    },
},
{
    toJson:{virtuals:true},
    toObject:{virtuals:true}
}
)

//ikopijuojam i musu shcema sita, embedinimo budas
/*
hotelSchema.pre('save', async function(){
    const managersPromise = this.managers.map(async id => User.findById(id))
    this.managers = await Promise.all(managersPromise)
})
*/

hotelSchema.virtual('reviews',{
     ref: 'Review',
     localField: '_id',
     foreignField: 'hotel',
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel