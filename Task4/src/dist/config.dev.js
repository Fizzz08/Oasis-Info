"use strict";

var mongoose = require('mongoose');

var connect = mongoose.connect("mongodb://localhost:27017/SignupDetails"); // Check database connected or not

connect.then(function () {
  console.log("Database Connected Successfully");
})["catch"](function () {
  console.log("Database cannot be Connected");
}); // Create Schema

var Loginschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
  firstName: {
    type: String,
    required: true,
    unique: false
  },
  lastName: {
    type: String,
    required: true,
    unique: false
  },
  gender: {
    type: String,
    required: true,
    unique: false
  }
}); // collection part

var User = new mongoose.model("User", Loginschema);
module.exports = User;
//# sourceMappingURL=config.dev.js.map
