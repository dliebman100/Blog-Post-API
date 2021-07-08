module.exports = (app) => {
  const users = require("../controllers/user.controller");

  const router = require("express").Router();

  router.get("/", users.findAll);

  router.get("/:id", users.findById);

  app.use("/api/user", router);
};
