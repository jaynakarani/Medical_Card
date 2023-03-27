const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.post(
  "/addpatient",
  async (req, res) => {
    try {
      const { name, email, age, bloodG, mobileNo, gender, aadhar, address, comments } = req.body;
      const patient = new Patient({
        name,
        email,
        age,
        bloodG,
        mobileNo,
        gender,
        address,
        comments,
        aadhar
      });
      const savePatient = await patient.save();
      res.json(savePatient);
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Internal server error occured");
    }
  }
);

router.get(
  "/getallpatients",
  async (req, res) => {
    try {
      const patient = await Patient.find();
      console.log(patient);
      res.json(patient);
    }
    catch (error) {
      console.error(err.message);
      res.status(500).send("Internal server error occured");
    }
  })

router.put("/updatepatient/:id", async (req, res) => {
  try {
    const { name, email, age, bloodG, mobileNo, gender, aadhar, address, comments } = req.body;
    // console.log(name, email, age, bloodG, mobileNo, gender,aadhar,address,comments);
    const newPatient = {};

    if(name)
    {
      newPatient.name = name;
    }
    if(email)
    {
      newPatient.email = email;
    }
    if(age)
    {
      newPatient.age = age;
    }
    if(bloodG)
    {
      newPatient.bloodG = bloodG;
    }
    if(mobileNo)
    {
      newPatient.mobileNo = mobileNo;
    }
    if(gender)
    {
      newPatient.gender = gender;
    }
    if(aadhar)
    {
      newPatient.aadhar = aadhar;
    }
    if(address)
    {
      newPatient.address = address;
    }
    if(comments)
    {
      newPatient.comments = comments;
    }

    // console.log(newPatient);


    const resData = await Patient.findByIdAndUpdate(req.params.id, 
      { $set: newPatient},
      { new: this.true });
    res.json(resData);
  }
  catch (e) {
    res.status(500).send("Internal server error occured");
  }
}
)

module.exports = router;
