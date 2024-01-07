const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/SignupDetails");

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true,
        unique:false
    },
    firstName: {
        type:String,
        required: true,
        unique:false
    },
    lastName: {
        type:String,
        required: true,
        unique: false
    },
    gender: {
        type:String,
        required: true,
        unique: false
    }

});

// collection part
const User = new mongoose.model("User", Loginschema);

module.exports = User;