module.exports = (app) => {
  const controller = require("../controllers/user.controller");

  const router = require("express").Router();

  router.get("/", controller.findAll);

  router.get("/:id", controller.findById);

  // router.post("/", controller.create);

  router.put("/:id", controller.update);

  app.use("/api/user", router);
};