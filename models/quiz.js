const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  quiztitle: { type: String, required: true },
  quizlocation: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
