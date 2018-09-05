var db = require("../models");

module.exports = function(app) {
  app.get("/api/cars", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Car.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.get("/api/cars/:id", function(req, res) {
    db.Car.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.post("/api/cars", function(req, res) {
    db.Car.create(req.body).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.delete("/api/cars/:id", function(req, res) {
    db.Car.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.put("/api/cars", function(req, res) {
    db.Car.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });
};
