const path = require("path");
const router = require("express").Router();
var auth = require("../controllers/AuthController.js");
var codecontroller = require("../controllers/codeController");
var quizcontroller = require("../controllers/quizController");
const db = require("../models");

console.log("dfdfd");
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
        console.log("Does not exist")
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
router.get('/musuemquiz', quizcontroller.findAll);
router.post('/musuemquiz', quizcontroller.create)
router.get('/musuemquiz/:id', quizcontroller.findById);
router.put('/musuemquiz/:id', quizcontroller.update);
router.delete('/musuemquiz/:id', quizcontroller.remove);


module.exports = router; 
