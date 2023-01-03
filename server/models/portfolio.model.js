const mongoose = require('mongoose');

const Portfolio = new mongoose.Schema({
    phoneNumber: {
        type: Number,
        // required: [true, "phone number is required"],
    },

    gender: {
        type: String, 
        enum: ["Male", "Female"]
    },
    specialization: {
        type: String, 
        // required: [true, 'specialization is required'],
        minlength: [3, "It should be at least three characters."]
    },
    address: {
        type: String, 
        // required: [true, 'address is required'],
        minlength: [3, "It should be at least three characters."]
    },
    linkedin: {
        type: String, 
    },
    github: {
        type: String, 
    },
    skills: {
        type: String, 
    },
    experience: {
        type: String, 
    },
    education: {
        type: String, 
    },
    summary: {
        type: String, 
    },
    projects: {
        type: String, 
    },
    profilePicUrl: {
        type: String, 
        // required: [true, "Profile picture is required"],
    },
    photo: {
        type: String
    },

   
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

        
}, { timestamps: true });
module.exports.Portfolio = mongoose.model('Portfolio', Portfolio);