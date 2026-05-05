const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  mark: {
    type: String,
    required: true, // e.g. LandingHero, highlights1, highlights2
  },
  name: String,
  title: String,
  description: String,
  img: String,
}, { timestamps: true });

module.exports = mongoose.model("Hero", heroSchema);