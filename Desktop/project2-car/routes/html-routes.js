var db = require("../models");
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/new-car", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/new.html"));
  });

  app.get("/car/:id", function(req, res) {
    db.Car.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCars) {
      res.render("car-detail", {
        car: dbCars
      });
    });
  });
};
