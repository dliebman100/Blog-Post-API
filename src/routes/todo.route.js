// configure export function which accepts the app parameter
module.exports = (app) => {
  const todo = require("../controllers/todo.controller");

  const router = require("express").Router();

  // .get is your HTTP method
  // '/' serves as the path(route) for the function
  router.get("/", todo.findAll);

  router.get("/:id", todo.findById);

  router.post("/", todo.create);

  router.put("/:id", todo.update);

  router.delete("/:id", todo.deleteById);

  app.use("/api/todo", router);
};
