/*
ROUTER:
* create an export called app. In that export, define an Express router.

* Within the export, create a GET route handler for getting all blog posts.  Return a phrase like "You have reached the router handler for get all blog posts."

*Also within the export, create the route-matching text string "/api/blogposts/" using app.use().

*Back in your app.js file right before the app.listen(), connect to the router you just built.  Hint:  use require(route)(app)

*Verify it works by browsing to http://localhost:3000/api/blogposts/ (Links to an external site.) and also verify that http://localhost:3000/ (Links to an external site.) still works.
*/

module.exports = (app) => {
  const router = require("express").Router();

  // inside the app export, add a require for your controller.
  const controller = require("../controllers/blogposts.controller");

  //   router.get("/", function (req, res) {
  //     res.send("You have reached the router for all blog posts");
  //   });

  // use new controller findAll
  router.get("/", controller.findAll);

  // GET posts by Id
  // build the findById method
  router.get("/:id", controller.findById);
  // res.send("reached the router to get blogpost ID");

  app.use("/api/blogposts", router);
};
