const axios = require("axios");

exports.findAll = (req, res) => {
  // res.send("You have reached the controller method for get all blog posts.");
  // call JSON placeholder API to get a list of blog posts
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    // take that object and we return the response
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.findById = (req, res) => {
  // res.send(`You asked for blog posts ${req.params.id}`);
  axios
    .get(`https://jsonplaceholder.typicode.com/users/ ${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
