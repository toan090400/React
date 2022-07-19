const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required: [true, 'A tour must have a name'],
        trim: true, 
        
    },
    password: {
        type: String,
        required: [true, 'A tour must have a name'],
        trim: true,
        select: false
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
        
},{timestamps: true,});


const User = module.exports = mongoose.model('User', UserSchema);