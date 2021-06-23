const db = require("../models");
const Vehicle = db.tutorials;

// Create and Save a new Vehicle
exports.create = (req, res) => {

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

exports.create = (req, res) => {
  // Validate request
  if (!req.body.year) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Vehicle
  const vehicle = new Vehicle({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  });

  // Save Tutorial in the database
  vehicle
    .save(vehicle)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Vehicle."
      });
    });
};

exports.findAll = (req, res) => {
  const year = req.query.year;
  let condition = year ? { year: { $regex: new RegExp(year), $options: "i" } } : {};

  Vehicle.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicles."
      });
    });
};

/* Find a single Vehicle with an id:*/
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vehicle.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Vehicle with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Vehicle with id=" + id });
    });
};

/* Update a Tutorial identified by the id in the request: */
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Vehicle.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Vehicle with id=${id}. Maybe Vehicle was not found!`
        });
      } else res.send({ message: "Vehicle was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Vehicle with id=" + id
      });
    });
};

/* Delete a Vehicles with the specified id: */
exports.delete = (req, res) => {
  const id = req.params.id;

  Vehicle.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Vehicle with id=${id}. Maybe Vehicle was not found!`
        });
      } else {
        res.send({
          message: "Vehicle was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Vehicle with id=" + id
      });
    });
};

/* Delete all Vehicles from the database: */
exports.deleteAll = (req, res) => {
  Vehicle.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Vehicles were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all vehicles."
      });
    });
};

/* Find all Tutorials with published = true:
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}; */
