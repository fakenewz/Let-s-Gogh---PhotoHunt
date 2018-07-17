var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var userController = {};

  userController.doRegister = function(req, res) {
    User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
      if (err) {
        console.log("Error", err)
        return res.json({ user : user });
      }
  
      passport.authenticate('local')(req, res, function () {
        res.redirect('/');
        console.log("coffeecups")
        // res.status(200).json({success: "Registered!"});
      });
    });
  };

  userController.doLogin = function(req, res) { 

  console.log("User", req.body)
    passport.authenticate('local')(req, res, function () {
        res.redirect('/');
        console.log("something")
     });
  }

  userController.logout = function(req, res) {
    req.logout();
    res.status(200).json({ success : "Logged Out" });
  };
  
  module.exports = userController;