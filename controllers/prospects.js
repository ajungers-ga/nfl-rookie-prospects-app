

// BELOW = importing the Prospect model so we can interact with the database
const Prospect = require("../models/prospect");

// BELOW = route handler for the home ("/") route, renders the landing page
const home = (req, res) => {
  res.render("index.ejs");
};

// BELOW = route handler for "/rookies" (index route), fetches all rookies and renders the index view
const index = async (req, res) => {
  const allRookies = await Prospect.find(); // grabs all rookies from the DB
  res.render("rookies/index.ejs", { rookies: allRookies }); // passes them to the EJS view
};

// BELOW = route handler for "/rookies/new" (GET), just renders the form to add a new rookie
const newRookie = (req, res) => {
  res.render("rookies/new.ejs", { rookie: {} }); // passing an empty rookie object
};

// BELOW = route handler for creating a rookie (POST to "/rookies")
// takes form data, creates a new rookie in the DB, and redirects to index
const create = async (req, res) => {
  await Prospect.create(req.body); // adds rookie to MongoDB
  res.redirect("/rookies"); // takes user back to the list of rookies
};

// BELOW = route handler for "/rookies/:id" (GET), shows details for one rookie
const show = async (req, res) => {
  const foundRookie = await Prospect.findById(req.params.id); // looks up rookie by ID
  res.render("rookies/show.ejs", { rookie: foundRookie }); // sends that rookie to the show view
};

// BELOW = route handler for "/rookies/:id/edit" (GET), renders the edit form for a rookie
const edit = async (req, res) => {
  const foundRookie = await Prospect.findById(req.params.id); // looks up rookie to pre-fill the form
  res.render("rookies/edit.ejs", { rookie: foundRookie });
};

// BELOW = route handler for updating a rookie (PUT to "/rookies/:id")
// takes form data, updates the rookie, and redirects to their show page
const update = async (req, res) => {
  await Prospect.findByIdAndUpdate(req.params.id, req.body); // updates rookie in DB
  res.redirect(`/rookies/${req.params.id}`); // takes user back to the rookie's details
};

// BELOW = route handler for deleting a rookie (DELETE to "/rookies/:id")
// removes the rookie from the DB and redirects back to index
const destroy = async (req, res) => {
  await Prospect.findByIdAndDelete(req.params.id); // deletes rookie from MongoDB
  res.redirect("/rookies"); // takes user back to the full list
};

// BELOW = exporting all controller functions so they can be used in server.js
module.exports = {
  home,
  index,
  new: newRookie,
  create,
  show,
  edit,
  update,
  destroy
};

