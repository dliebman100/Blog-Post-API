const axios = require("axios");

exports.findAll = (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
};

// CREATE
exports.create = (req, res) => {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: req.body.title,
      body: req.body.body,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};
// UPDATE
exports.update = (req, res) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`, {
      userId: req.body.userId,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

// DELETE
exports.deleteById = (req, res) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
