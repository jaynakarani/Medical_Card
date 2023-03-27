const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  userId: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
const user = mongoose.model("user", UserSchema);
module.exports = user;
