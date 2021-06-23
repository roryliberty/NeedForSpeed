module.exports = app => {
  const vehicles = require("../nodejs-express-mongodb/app/controllers/vehicle.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", vehicles.create);

  // Retrieve all Tutorials
  router.get("/", vehicles.findAll);

  // Retrieve all published Tutorials
  router.get("/published", vehicles.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", vehicles.findOne);

  // Update a Tutorial with id
  router.put("/:id", vehicles.update);

  // Delete a Tutorial with id
  router.delete("/:id", vehicles.delete);

  // Create a new Tutorial
  router.delete("/", vehicles.deleteAll);

  app.use('/api/vehicles', router);
};
