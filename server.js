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




// BELOW = importing the Rookie model
const Prospect = require("./models/prospect.js"); 
const rookieProspects = require("./seed/rookieProspects.js");

// BELOW = middleware that parses form data and attaches it to req.body
app.use(express.urlencoded({ extended: false }));

// BELOW = additional middleware
app.use(methodOverride("_method")); // supports PUT & DELETE from forms
app.use(morgan("dev")); // logs each request in the terminal
app.use(express.static(path.join(__dirname, "public"))); // serves static files like CSS

// BELOW = routing path: "/" This is the landing page, method = GET
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// BELOW = routing path: "/rookies" Index - shows all rookie prospects
app.get("/rookies", async (req, res) => {
  const allRookies = await Prospect.find();
  res.render("rookies/index.ejs", { rookies: allRookies });
});

// BELOW = routing path: "/rookies/new" New form to add a rookie, method = GET
app.get("/rookies/new", (req, res) => {
  res.render("rookies/new.ejs");
});

// BELOW = routing path: "/rookies/:id" Show - details for one rookie
app.get("/rookies/:id", async (req, res) => {
  const foundRookie = await Prospect.findById(req.params.id);
  console.log(foundRookie);
  res.render("rookies/show.ejs", { rookie: foundRookie });
});

// BELOW = routing path: "/rookies" Create - adds a new rookie to DB, method = POST
app.post("/rookies", async (req, res) => {
  await Prospect.create(req.body); // creates a new rookie in the DB
  res.redirect("/rookies");      // redirects to index to view all
});

// BELOW = routing path: "/rookies/:id/delete" Delete - removes a rookie, method = DELETE
app.delete("/rookies/:id", async (req, res) => {
  await Prospect.findByIdAndDelete(req.params.id);
  res.redirect("/rookies"); // back to the index page after deletion
});

// BELOW = routing path: "/rookies/:id/edit" Edit - shows form to edit rookie
app.get("/rookies/:id/edit", async (req, res) => {
  const foundRookie = await Prospect.findById(req.params.id);
  res.render("rookies/edit.ejs", { rookie: foundRookie });
});

// BELOW = routing path: "/rookies/:id" Update - updates rookie info, method = PUT
app.put("/rookies/:id", async (req, res) => {
  await Prospect.findByIdAndUpdate(req.params.id, req.body); // update rookie with form data
  res.redirect(`/rookies/${req.params.id}`);               // redirect to updated show page
});

// BELOW = my listening port
app.listen(3000, () => {
  console.log("Listening on port 3000");
});