const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.QuizResults
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.QuizResults
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.QuizResults
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function (req, res) {

  //     path = "/uploads" + req.file.filename;
  
  //     cloudinary.uploader.upload(
  //     path,
  //     function (result) {
  //       console.log("result", result)
      
  //     const newQuiz = {
  //       photo: result.url,
  //       date: req.body.date,
  //       answer1: req.body.answer1,
  //       answer2: req.body.answer2,
  //       answer3: req.body.answer3,
  //    };

  //    db.QuizResults
  //     .create(newQuiz)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err))
  //   })
  //  }
    
}