const mongoose = require("mongoose");

const prospectSchema = new mongoose.Schema({
  name: String,
  position: {
    type: String,
    enum: ["QB", "RB", "WR", "TE"], // Limiting to only those 4
    required: true
  },
  college: String,
  rank: Number, // Prospect position rank
  projectedDraftPosition: String // Example: "1st Round", "Top 10", "Day 2"
});

const Prospect = mongoose.model("Prospect", prospectSchema);

module.exports = Prospect;