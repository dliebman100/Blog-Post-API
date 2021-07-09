/*
CONTROLLER:
* In the controller file, create a function called exports.findall().  Return a phrase like "You have reached the controller method for get all blog posts."

* Back in your router file inside the app export, add a require for your controller.

* Also in the router, modify your GET handler to call the findAll() method in your new controller. Start your app
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
    .get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    }).catch(error => {
      console.log(error);
    })
    ;
  
};

// need 2 params in post function call
exports.create = (req, res) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: req.body.title,
      body: req.body.body,
      userId: req.body.userId,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.update = (req, res) => {
  axios
    .put("https://jsonplaceholder.typicode.com/posts/" +req.params.id, {
      title: req.body.title,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.deleteById = (req, res) => {
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/" +req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};