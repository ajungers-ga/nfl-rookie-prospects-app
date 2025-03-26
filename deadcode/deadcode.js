// SECTION 1 = OLD CODE FROM SERVER.JS


// BELOW = routing path: "/" This is the landing page, method = GET
// app.get("/", (req, res) => {
    // res.render("index.ejs");
//   });
  
  // BELOW = routing path: "/rookies" Index - shows all rookie prospects
//   app.get("/rookies", async (req, res) => {
    // const allRookies = await Prospect.find();
    // res.render("rookies/index.ejs", { rookies: allRookies });
//   });
  
  // BELOW = routing path: "/rookies/new" New form to add a rookie, method = GET
//   app.get("/rookies/new", (req, res) => {
    // res.render("rookies/new.ejs");
//   });
  
  // BELOW = routing path: "/rookies/:id" Show - details for one rookie
//   app.get("/rookies/:id", async (req, res) => {
    // const foundRookie = await Prospect.findById(req.params.id);
    // console.log(foundRookie);
    // res.render("rookies/show.ejs", { rookie: foundRookie });
//   });
  
  // BELOW = routing path: "/rookies" Create - adds a new rookie to DB, method = POST
//   app.post("/rookies", async (req, res) => {
    // await Prospect.create(req.body); // creates a new rookie in the DB
    // res.redirect("/rookies");      // redirects to index to view all
//   });
  
  // BELOW = routing path: "/rookies/:id/delete" Delete - removes a rookie, method = DELETE
//   app.delete("/rookies/:id", async (req, res) => {
    // await Prospect.findByIdAndDelete(req.params.id);
    // res.redirect("/rookies"); // back to the index page after deletion
//   });
//   
  // BELOW = routing path: "/rookies/:id/edit" Edit - shows form to edit rookie
//   app.get("/rookies/:id/edit", async (req, res) => {
    // const foundRookie = await Prospect.findById(req.params.id);
    // res.render("rookies/edit.ejs", { rookie: foundRookie });
//   });
  
  // BELOW = routing path: "/rookies/:id" Update - updates rookie info, method = PUT
//   app.put("/rookies/:id", async (req, res) => {
    // await Prospect.findByIdAndUpdate(req.params.id, req.body); // update rookie with form data
    // res.redirect(`/rookies/${req.params.id}`);               // redirect to updated show page
//   });
  
  // BELOW = my listening port
//   app.listen(3000, () => {
    // console.log("Listening on port 3000");
//   });





// section 2: old code from

// const rookieProspects = require("./seed/rookieProspects.js");




// below is for rookieprospects.js

// purpose of this file = 
// 1. export an array of rookie data... 
// ... This array was created by...
// ... researching data online. Building an excel sheet and manually entering data...
// ... then seeding it the mongodb uri. then manually filling out the array to match the excel sheet...




















// // BELOW = route handler for the home ("/") route, renders the landing page
// const home = (req, res) => {
//   res.render("index.ejs");
// };

// // BELOW = route handler for "/rookies" (index route), fetches all rookies and renders the index view
// const index = async (req, res) => {
//   const allRookies = await Prospect.find(); // grabs all rookies from the DB
//   res.render("rookies/index.ejs", { rookies: allRookies }); // passes them to the EJS view
// };

// // BELOW = route handler for "/rookies/new" (GET), just renders the form to add a new rookie
// const newRookie = (req, res) => {
//   res.render("rookies/new.ejs");
// };

// // BELOW = route handler for creating a rookie (POST to "/rookies")
// // takes form data, creates a new rookie in the DB, and redirects to index
// const create = async (req, res) => {
//   await Prospect.create(req.body); // adds rookie to MongoDB
//   res.redirect("/rookies"); // takes user back to the list of rookies
// };

// // BELOW = route handler for "/rookies/:id" (GET), shows details for one rookie
// const show = async (req, res) => {
//   const foundRookie = await Prospect.findById(req.params.id); // looks up rookie by ID
//   res.render("rookies/show.ejs", { rookie: foundRookie }); // sends that rookie to the show view
// };

// // BELOW = route handler for "/rookies/:id/edit" (GET), renders the edit form for a rookie
// const edit = async (req, res) => {
//   const foundRookie = await Prospect.findById(req.params.id); // looks up rookie to pre-fill the form
//   res.render("rookies/edit.ejs", { rookie: foundRookie });
// };

// // BELOW = route handler for updating a rookie (PUT to "/rookies/:id")
// // takes form data, updates the rookie, and redirects to their show page
// const update = async (req, res) => {
//   await Prospect.findByIdAndUpdate(req.params.id, req.body); // updates rookie in DB
//   res.redirect(`/rookies/${req.params.id}`); // takes user back to the rookie's details
// };

// // BELOW = route handler for deleting a rookie (DELETE to "/rookies/:id")
// // removes the rookie from the DB and redirects back to index
// const destroy = async (req, res) => {
//   await Prospect.findByIdAndDelete(req.params.id); // deletes rookie from MongoDB
//   res.redirect("/rookies"); // takes user back to the full list
// };
