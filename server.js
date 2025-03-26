// BELOW = the enviorment variables from .env
const dotenv = require("dotenv"); // requiring the package dotenv
dotenv.config();                  // this is loading the environment variables from the .env file

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override"); // this is to delete via forms
const morgan = require("morgan"); // this is to log HTTP requests
const path = require("path"); // required for serving static files

// BELOW = Initialize the app after requiring express
const app = express();

// BELOW = sets the view engine after the app is initialized 
app.set("view engine", "ejs");

// BELOW = connect to MongoDB using the string in my .env file
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
});


// BELOW = middleware that parses form data and attaches it to req.body
app.use(express.urlencoded({ extended: false }));

// BELOW = additional middleware
app.use(methodOverride("_method")); // supports PUT & DELETE from forms
app.use(morgan("dev")); // logs each request in the terminal
app.use(express.static(path.join(__dirname, "public"))); // serves static files like CSS


// BELOW = CONTROLLER FUNCTIONS from MVC level up
const prospectsCtrl = require("./controllers/prospects");
app.get("/rookies", prospectsCtrl.index);

// ===========================
// BELOW = ROUTES
// ===========================

app.get("/", prospectsCtrl.home);                 // landing page
app.get("/rookies", prospectsCtrl.index);         // index route - all rookies
app.get("/rookies/new", prospectsCtrl.new);       // form to add new rookie
app.post("/rookies", prospectsCtrl.create);       // create new rookie
app.get("/rookies/:id", prospectsCtrl.show);      // show one rookie
app.get("/rookies/:id/edit", prospectsCtrl.edit); // form to edit rookie
app.put("/rookies/:id", prospectsCtrl.update);    // update rookie
app.delete("/rookies/:id", prospectsCtrl.destroy); // delete rookie

// BELOW = my listening port
app.listen(3000, () => {
  console.log("Listening on port 3000");
});











































