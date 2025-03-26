// seed.js purpose = 
// 1. connect to mongo
// 2. import the prospect model
// 3. import the data from rookieProspects
// 4. wipe the database (please dont)
// 5. insert the new data


const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected for seeding");
});

const Prospect = require("../models/prospect.js");
const rookieProspects = require("./rookieProspects.js");

// Clear DB and Insert New Data
async function seed() {
  try {
    await Prospect.deleteMany({});
    console.log("Old rookies deleted");

    await Prospect.insertMany(rookieProspects);
    console.log("New rookie prospects added!");

    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding data:", err);
  }
}

seed();