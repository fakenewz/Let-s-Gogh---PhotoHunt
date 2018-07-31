const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizResultsSchema = new Schema({
  answer1: {type: String, required: false},
  answer2: {type: String, required: false},
  answer3: {type: String, required: false},
  answersArray: [{ type: String }],
  date: { type: Date, default: Date.now }
});

const QuizResults = mongoose.model("QuizResults", quizResultsSchema);

module.exports = QuizResults;
