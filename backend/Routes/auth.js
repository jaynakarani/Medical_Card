const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const { userId, password } = req.body;

  let user = await User.find({ userId: userId });
  if (!user) {
    return res.status(409).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);

  user = await User.create({ userId: userId, password: secPass });

  return res.status(201).send({ user });
});

router.post("/login", async (req, res) => {
  const { userId , password } = req.body;

  try {
    const user = await User.findOne({ userId });
    if (user) {
      const passwordComapre = await bcrypt.compare(password, user.password);
      if (passwordComapre) {
        return res.status(200).json({ user });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal server error occured");
  }
});

module.exports = router;
