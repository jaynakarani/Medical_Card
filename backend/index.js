const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");

const port = 4000;
app.use(cors());

const mongoUri =
  "mongodb+srv://bhavdip:bhavdip@atlascluster.dnu8pjn.mongodb.net/MediCard";

mongoose.set("strictQuery", false);

mongoose.connect(mongoUri, () => {
  console.log("Connect to mongo Succesfully");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use("/api/auth", require("./Routes/auth"));
app.use("/api/patient", require("./Routes/patient"));

app.listen(port, () => {
  console.log(` listening on port ${port}`);
});
