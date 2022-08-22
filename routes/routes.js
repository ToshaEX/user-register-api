const Model = require("../model/model");
const express = require("express");

const router = express.Router();


router.post("/registerUser", async (req, res) => {
  const { name, nic, gender } = req.body;
  const data = new Model({
    name,
    nic,
    gender,
  });
  //console.log(req.body);

  try {
    //preventing from same person registering
    const isExists = await Model.find({ nic: nic });
    console.log(isExists);
    if (isExists.length) {
      res.status(400).json({ message: "You Are Already Registered..." });
    } else {
      //If the person not exists, then save to the db
      const result = await data.save();
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/fetchAllData", async (req, res) => {
  try {
    const result = await Model.find();
    res.json(result);
    console.log("send data");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
