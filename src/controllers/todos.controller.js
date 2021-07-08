const axios = require("axios");

exports.findAll = (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/todos/ ${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
