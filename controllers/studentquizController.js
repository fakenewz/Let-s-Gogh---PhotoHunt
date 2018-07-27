const db = require("../models");

module.exports = {
  // create: function(req, res) {
  //   // compare against actual answers via req
  //   db.QuizResults
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  update: function(req, res) {
    db.QuizResults
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};