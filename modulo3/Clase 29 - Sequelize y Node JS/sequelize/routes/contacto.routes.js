module.exports = app => {
  const contactoController = require("../controllers/contacto.controller.js");

  const router = require("express").Router();

  // Create a new Contact
  router.post("/", contactoController.create);

  // Retrieve all Contacts
  router.get("/", contactoController.findAll);

  // Retrieve all published Contacts
  router.get("/published", contactoController.findAllPublished);

  // Retrieve a single Contact with id
  router.get("/:id", contactoController.findOne);

  // Update a Contact with id
  router.put("/:id", contactoController.update);

  // Delete a Contact with id
  router.delete("/:id", contactoController.delete);

  // Delete all Contacts
  router.delete("/", contactoController.deleteAll);

  app.use("/api/contactos", router);
};
