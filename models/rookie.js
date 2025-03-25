const mongoose = require("mongoose");

const rookieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: {
    type: String,
    enum: ["QB", "RB", "WR", "TE"],
    required: true,
  },
  college: { type: String },
  prospectRank: { type: Number }, // Position-specific rank
  projectedDraftPosition: { type: String },
  isFantasyRelevant: { type: Boolean, default: false }
});

const Rookie = mongoose.model("Rookie", rookieSchema);
module.exports = Rookie;