const path = require("path");
const router = require("express").Router();
var auth = require("../controllers/AuthController.js");
var codecontroller = require("../controllers/codeController");
var teacherController = require("../controllers/teacherController");
var studentquizController = require("../controllers/studentquizController")
const db = require("../models");
const multer = require("multer");

const cloudinary = require("cloudinary");

var CLOUDINARY_URL='https://api.cloudinary.com/v1_1/dfdpnpq6l/upload';
var CLOUDINARY_UPLOAD_PRESET ='g8u4bubj';

  // Cloudinary Configuration
  cloudinary.config({
    cloud_name: 'dfdpnpq6l',
    api_key: '323888751196637',
    api_secret: 'jucvaGBBrrvni4mEDXAylf5-2ys'
// jucvaGBBrrvni4mEDXAylf5-2ys api full secret key - get an error when fully implemented
  });

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


// function compareRoute(req, res) {
//   db.QuizResults
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err))
//  }

// router.post('/studentquiz/', compareRoute);

//function testTest(req, res) {

//  const acceptedFilesTypes = [
//     "image/jpeg",
//     "image/tiff",
//     "image/png",
//     "image/WebP",
//     "image/JPG"
//   ];
 
//  const checkFileType = fileType => {
//   let safe = false;
//   for (let type of acceptedFilesTypes) {
//     console.log(type, fileType);
//     if (fileType === type) {
//       safe = true;
//     }
//   }
//   console.log(safe);
//   return safe;
//  };
 
 let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("file", file)
    cb(null, "/uploads")
  },
  filename: function (req, file, cb) {
    console.log("office", file)
    cb(null, file.fieldname + '-' + Date.now())
  }
 })
 
 let upload = multer({ storage })
  // fileFilter: (req, file, next) => {
  //   console.log("office space", file)
  //   if (!checkFileType(file.mimetype)) {
  //     req.fileValidationError = true;
  //     console.log("Not a Valid File Type");
  //     return next(null, false, req.fileValidationError);
  //   } else {
  //     console.log("File Type Validated");
  //     next(null, true);
  //   }
  // }
 
 //.single("picture"); 

//     console.log("world", req)
//     console.log("world peas", req.body)
 
//     path = "/public/upload" + req.file.filename;
  
//       cloudinary.uploader.upload(
//       path,
//       function (result) {
//         console.log("result", result)
      
//       const newQuiz = {
//         photo: result.url,
//         date: req.body.date,
//         answer1: req.body.answer1,
//         answer2: req.body.answer2,
//         answer3: req.body.answer3,
//      };

//      db.QuizResults
//       .create(newQuiz)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err))
//     })
   
//  }

//  router.post('/studentquiz', testTest) 

//  console.log("whatwhat")
 
 router.post('/studentquiz/', function (req, res) {
      
      let newQuiz = {
        picture: req.body.picture,
        date: req.body.date,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
     };

     db.QuizResults
      .create(newQuiz)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    });

  module.exports = router;
