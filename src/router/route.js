const express = require("express");
const router = new express.Router();
const menSchema = require("../models/menSchema");

//post data
router.post("/mens", async (req, res) => {
  try {
    const addMenRaceData = new menSchema(req.body);
    // console.log(req.body);
    const getData = await addMenRaceData.save();
    res.status(201).send(getData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//get all data
router.get("/mens", async (req, res) => {
  try {
    const getData = await menSchema.find({});
    res.send(getData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//get by id data
router.get("/mens/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getData = await menSchema.findById(id);
    res.send(getData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//update patch by id data
router.patch("/mens/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getData = await menSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(getData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//delete  by id data
router.delete("/mens/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getData = await menSchema.findByIdAndDelete(id);
    res.send(getData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
module.exports = router;
