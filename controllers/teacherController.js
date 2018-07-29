const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Quiz
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Quiz
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCode: function(req, res) {
    db.Quiz
     .findOne({ code: req.params.codeID})
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Quiz
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Quiz
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
