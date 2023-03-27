const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobileNo: {
    type: Number,
    require: true,
  },

  bloodG: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  aadhar: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  comments: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    // jayare form submit thase tayare date call thase
    default: Date.now,
  },
});

module.exports = mongoose.model("patient", ContactSchema);
