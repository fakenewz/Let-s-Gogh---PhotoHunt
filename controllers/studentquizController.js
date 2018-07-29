const db = require("../models");
const cloudinary = require("cloudinary");

// Cloudinary Configuration
cloudinary.config({
  cloud_name: 'dfdpnpq6l',
  api_key: '323888751196637',
  api_secret: 'jucvaGBBrrvni4mEDXAylf5-2ys'
// jucvaGBBrrvni4mEDXAylf5-2ys api full secret key - get an error when fully implemented
});

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

  create: function (req, res) {
    // send Image to cloudnary
    path = "files/" + req.file.filename;
    cloudinary.uploader.upload(
      // "files/"" + req.file.filename,
      path,
      function (result) {
        // Add URL to new quiz object
        const newQuiz = {
          photo: result.url,
          date: req.body.date,
          code: req.body.code,
          question1: req.body.question1,
          a1: req.body.a1,
          a2: req.body.a2,
          a3: req.body.a3,
          a4: req.body.a4,
          aRight: req.body.aRight,
          question2: req.body.question2,
          b1: req.body.b1,
          b2: req.body.b2,
          b3: req.body.b3,
          b4: req.body.b4,
          bRight: req.body.bRight,
          correctOnes: req.body.correctOnes,
        };
        console.log("New quiz Object:", newQuiz);
        db.QuizResults
          .create(newQuiz)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })
    }
};