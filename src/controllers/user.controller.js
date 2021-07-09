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
    .get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
// need 2 params in post function call
// exports.create = (req, res) => {
//   axios
//     .post("https://jsonplaceholder.typicode.com/users/", {
//       username: req.body.username,
//     })
//     .then((apicall) => {
//       res.send(apicall.data);
//     });
// };
exports.update = (req, res) => {
  axios
    .put("https://jsonplaceholder.typicode.com/users/" +req.params.id, {
      name: req.body.name
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};
