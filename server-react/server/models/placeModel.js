const mongoose = require('mongoose');
const PlaceSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
    },
    number: {
        type: Number,
    },
    image: {
        type: String,
    },
        
},{timestamps: true,});


const Place = module.exports = mongoose.model('Place', PlaceSchema);