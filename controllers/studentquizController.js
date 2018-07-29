const db = require("../models");
const Post = require("../models");
const passport = require("../passport");
var cloudinary = require("cloudinary");

// Cloudinary Configuraiton
cloudinary.config({
cloud_name: 'dfdpnpq6l',
api_key: '323888751196637',
api_secret: 'jucvaGBBrrvni4mEDXAylf5-2ys'
// jucvaGBBrrvni4mEDXAylf5-2ys api full secret key - get an error when fully implemented
});

module.exports = {
 
  update: function(req, res) {
    db.QuizResults
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {

    console.log("studentquizController.js: Request from quiz create: ", req.body);
    console.log("studentquizController.js: file from sent from Muster: ", req.file);
    // send Image to cloudnary
    path = "files/" + req.file.filename;
    console.log("File Path:", path);
    cloudinary.uploader.upload(
      // "files/"" + req.file.filename,
      path,
      function (result) {
        console.log("#################################");
        console.log("Cloudinary Upload Result: ", result);
        console.log("quizpics: ", result.url);
        console.log("#################################");
 
        // Add URL to new pup Object and Update mongoDB
        const newQuiz = {
          photo: result.url,
          date: req.body.date
        };
        console.log("New quiz Object:", newQuiz);
        db.Pup
          .create(newQuiz)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })
    }
};