// load module
const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("You have reached the top-level route handler with a GET");
});

// add router app
require("./src/routes/blogposts.route")(app);
require("./src/routes/user.route")(app);
require("./src/routes/todos.route")(app);

// logs the server when it starts listening
app.listen(3000, function () {
  console.log("Blogpost API listening on port 3000!");
});
