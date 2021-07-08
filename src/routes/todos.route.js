// configure export function which accepts the app parameter
module.exports = (app) => {
  const todos = require("../controllers/todos.controller");

  const router = require("express").Router();

  // .get is your HTTP method
  // '/' serves as the path(route) for the function
  router.get("/", todos.findAll);

  router.get("/:id", todos.findById);

  app.use("/api/todos", router);
};
