const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

mongoose.connect(
  // "mongodb+srv://bhavdip:bhavdip@atlascluster.dnu8pjn.mongodb.net/?retryWrites=true&w=majority",
  "mongodb+srv://textplus3:textplus3@cluster0.djfjmk3.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  const allUser = User.find({});

  res.send(allUser);
});

app.listen(9002, () => {
  console.log("Server listening on port 9002");
});
