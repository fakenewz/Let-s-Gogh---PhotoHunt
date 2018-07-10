const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes); 

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_2hn3kv0g:eb8m9l030mu52c5lgopfavgg5k@ds231991.mlab.com:31991/heroku_2hn3kv0g");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
