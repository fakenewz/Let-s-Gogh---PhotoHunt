const path = require("path");
const router = require("express").Router();
var auth = require("../controllers/AuthController.js");
var codecontroller = require("../controllers/codeController");
var teacherController = require("../controllers/teacherController");
var studentquizController = require("../controllers/studentquizController")
const db = require("../models");
const fs = require('fs');

console.log("dfdfd");

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

  //   fs.readFile('./test.json', function(err, data) {
  //     console.log("gift cards")
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("gift horse", data)
  //     var text = JSON.parse(data);
  //     console.log("gift presents")
  //     var newText = {
  //       type: req.body.type,
  //       level: req.body.level,
  //       question: req.body.question,
  //       answers: req.body.answers,
  //       correct: req.body.correct,
  //       explanation: req.body.explanation
  //     };
  //   console.log("bag of chips")
  //   text.push(newText);

  //   console.log("chips poker", text)
  //   fs.writeFile('./test.json', JSON.stringify(text, null, 4), 
  //   function(err) {
  //     if (err) {
  //       console.error(err);
  //     }
  //     res.json(text);
  //   });
  // });
}

router.post('/musuemquiz', createQuiz)

router.get('/musuemquiz/:id', teacherController.findById);
router.put('/musuemquiz/:id', teacherController.update);
router.delete('/musuemquiz/:id', teacherController.remove);


// router.post('/studentquiz', studentquizController.create);
console.log("see here")

function compareRoute(req, res) {
  // db.Quiz
  //   .create(req.body)
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err))

  db.QuizResults
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))

// db.Quiz.find({correctOnes: req.body.correctOnes})
// db.QuizResults.find({answersArray: req.body.answersArray})

// console.log("cobra", req.body.answersArray)
// console.log("snake", req.body.correctOnes)

// function compare(answersArray, correctOnes){
//   const scoreArray =[];
// }

// answersArray.forEach((e1) => correctOnes.forEach((e2) => 
//   {if (e1 === e2) 
//     {scoreArray.push(e1)} 
//   }
//  )
// )
// console.log("scoreArray", scoreArray)
}

router.post('/studentquiz', compareRoute);


// do a loop or switch statement
// save answers as an array
// run a loop and compare against the real answers array
// req.params.code_id
// ref

module.exports = router;  
