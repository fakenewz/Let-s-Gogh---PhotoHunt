const path = require("path");
const router = require("express").Router();
var auth = require("../controllers/AuthController.js");
var codecontroller = require("../controllers/codeController");
var teacherController = require("../controllers/teacherController");
var studentquizController = require("../controllers/studentquizController")
const db = require("../models");
const multer = require("multer");


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

// router.post('/studentquiz', studentquizController.create);

const acceptedFilesTypes = [
  "image/jpeg",
  "image/tiff",
  "image/png",
  "image/WebP"
 ];
 
 const checkFileType = fileType => {
  let safe = false;
  for (let type of acceptedFilesTypes) {
    console.log(type, fileType);
    if (fileType === type) {
      safe = true;
    }
  }
  console.log(safe);
  return safe;
 };
 
 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/")
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
 })
 
 const upload = multer({
  storage: storage,
  fileFilter: (req, file, next) => {
    if (!checkFileType(file.mimetype)) {
      req.fileValidationError = true;
      console.log("Not Valid");
      return next(null, false, req.fileValidationError);
    } else {
      console.log("Validated");
      next(null, true);
    }
  }
 });


router.post('/studentquiz/', upload.single("picture"), studentquizController.create);

module.exports = router;  
