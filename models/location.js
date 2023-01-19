const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  watchId: Number,
  longitude: Number,
  latitude: Number,
  timestamp: { type: Date, default: Date.now },
  speed: Number,
});

module.exports = mongoose.model("Location", locationSchema);
