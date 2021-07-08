/*
CONTROLLER:
* In the controller file, create a function called exports.findall().  Return a phrase like "You have reached the controller method for get all blog posts."

* Back in your router file inside the app export, add a require for your controller.

* Also in the router, modify your GET handler to call the findAll() method in your new controller. Start your app

* Verify it works by browsing to http://localhost:3000/api/blogposts/ (Links to an external site.) and also verify that http://localhost:3000/ (Links to an external site.) still works.  NOTE:  Check the message for /api/blogposts carefully to make it is coming from the controller.
*/

const axios = require("axios");

exports.findAll = (req, res) => {
  // res.send("You have reached the controller method for get all blog posts.");
  // call JSON placeholder API to get a list of blog posts
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    // take that object and we return the response
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.findById = (req, res) => {
  // res.send(`You asked for blog posts ${req.params.id}`);
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/ ${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
