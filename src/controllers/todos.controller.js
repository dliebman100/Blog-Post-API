const axios = require("axios");

exports.findAll = (req, res) => {
  axios
    .get(
      "https://jsonplaceholder.typicode.com/todos"
    )
    .then((apicall) => {
      res.send(apicall.data);
    });
};