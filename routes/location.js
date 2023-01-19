const express = require("express");
const router = express.Router();
const locationSchema = require("../models/location");

const date = new Date();

router.get("/", (req, res) => {
  res.send("Hi");
});
router.post("/add-location", (req, res) => {
  const location = new locationSchema({
    watchId: req.body.watchId,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    speed: req.body.speed,
  });
  location.save().then((result) => {
    res.json({
      status: "Success",
      longitude: req.body.longitude,
      latitude: req.body.latitude,
    });
  });
});

module.exports = router;
