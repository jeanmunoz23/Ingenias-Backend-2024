const db = require("../database/models");
const Contacto = db.contacts;
const Op = db.Op;

// Create and Save a new Contacto
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Contacto
  const contacto = {
    title: req.body.title,
    author: req.body.author,
    published: req.body.published ? req.body.published : false
  };

  // Save Contacto in database
  Contacto.create(contacto)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Contacto."
      });
    });
};

// Retrieve all Contactos from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Contacto.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving contactos."
      });
    });
};

// Find a single Contacto with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Contacto.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Contacto with id = ${id}`
      });
    });
};

// Update a Contacto by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Contacto.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Contacto was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Contacto with id=${id}. Maybe Contacto was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Contacto with id=" + id
      });
    });
};

// Delete a Contacto with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Contacto.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Contacto was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Contacto with id=${id}. Maybe Contacto was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Contacto with id=" + id
      });
    });
};

// Delete all Contactos from the database.
exports.deleteAll = (req, res) => {
  Contacto.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Contactos were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all contactos."
      });
    });
};

// Find all published Contactos
exports.findAllPublished = (req, res) => {
  Contacto.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving contactos."
      });
    });
};
