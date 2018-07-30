const path = require("path");
const router = require("express").Router();
var auth = require("../controllers/AuthController.js");
var codecontroller = require("../controllers/codeController");
var teacherController = require("../controllers/teacherController");
var studentquizController = require("../controllers/studentquizController")
const db = require("../models");
const multer = require("multer");

// const cloudinary = require("cloudinary");
//   // Cloudinary Configuration
//   cloudinary.config({
//     cloud_name: 'dfdpnpq6l',
//     api_key: '323888751196637',
//     api_secret: 'jucvaGBBrrvni4mEDXAylf5-2ys'
// // jucvaGBBrrvni4mEDXAylf5-2ys api full secret key - get an error when fully implemented
//   });

router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route for login action
router.post('/login', auth.doLogin);  

// route for logout action
router.get('/logout', auth.logout);


// route to add code
router.get('/quizcreation', codecontroller.findAll);


 function createCode(req, res) {
   console.log("sdsdsmnmnmnmnmnmn")
  db.Code
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  db.Code.find({code: req.body.code})
    .then(foundCode => {
      if (foundCode.length == 0) {
        cb('Does not exist',null);
      } else {
        console.log("A", foundCode.length)
      }
     })
     .catch(err =>  console.log("error", err)); 
}

router.post('/quizcreation', createCode)

router.get('/quizcreation/:id', codecontroller.findById);
router.put('/quizcreation/:id', codecontroller.update);
router.delete('/quizcreation/:id', codecontroller.remove);

// Quiz Routes:
router.get('/musuemquiz', teacherController.findAll);

function createQuiz(req, res) {
  db.Quiz
    .create(req.body)
    .then(dbModel => res.json(dbModel),
    console.log("dbModel for create", req.body))
    .catch(err => res.status(422).json(err));
}

router.post('/musuemquiz', createQuiz)

router.get('/musuemquiz/:id', teacherController.findById);
router.put('/musuemquiz/:id', teacherController.update);
router.delete('/musuemquiz/:id', teacherController.remove);


router.get('/studentquiz/:codeID', teacherController.findByCode)


function compareRoute(req, res) {
  db.QuizResults
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
 }

router.post('/studentquiz/', compareRoute);
 
// const multerConfig = {
    
//   storage: multer.diskStorage({
//    //Setup where the user's file will go
//    destination: function(req, file, next) {
//      next(null, '/photoFiles');
//      },   
//     filename: function(req, file, next) {
//       console.log(file);
//       const ext = file.mimetype.split('/')[1];
//       next(null, file.fieldname + '-' + Date.now() + '.'+ext);
//     }
//   })
//  }

// let storage;
// const upload = multer({ storage: storage }); 

// router.post('/upload/', upload.single("picture"), function (req, res, next) {
//   // Send to Cloudinary:

//   path = "/photoFiles" + req.file.filename;
//   cloudinary.uploader.upload(
//     path,
//     function (result) {
//       // Add URL to new quiz object
//       const newQuiz = {
//         picture: result.url,
//         date: req.body.date,
//         code: req.body.code,
//         question1: req.body.question1,
//         a1: req.body.a1,
//         a2: req.body.a2,
//         a3: req.body.a3,
//         a4: req.body.a4,
//         aRight: req.body.aRight,
//         question2: req.body.question2,
//         b1: req.body.b1,
//         b2: req.body.b2,
//         b3: req.body.b3,
//         b4: req.body.b4,
//         bRight: req.body.bRight,
//         correctOnes: req.body.correctOnes,
//       };
//       db.QuizResults
//         .create(newQuiz)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     })
//   })

  module.exports = router; 
