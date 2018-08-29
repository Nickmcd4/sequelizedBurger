
var db = require("../models/");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.burger.findAll({

    }).then(function (data) {
      res.render("index", {
        burgers: data
      });
    })
  });

  app.post("/", function (req, res) {
    db.burger.create({
      burger_name: req.body.name

    }).then(function (data) {
      res.redirect("/");
    })
  })

  app.put("/:id", function(req, res){
    db.burger.update(
      {
        devoured: req.body.boolean === "true"
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(data){
      res.redirect("/");
    })
  })

  app.delete(":id", function(req, res){
    db.burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.redirect("/");
    });
  });
};