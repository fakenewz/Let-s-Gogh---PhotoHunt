var User = require('./models/User');

const express = require("express");
const bodyParser = require("body-parser");

var env = require('dotenv').load(); 
var exphbs = require('express-handlebars') 

var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session'); 

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false})); 
app.use(passport.initialize()); 
app.use(passport.session()); 


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes); 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/letsgoghphotohunt");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
