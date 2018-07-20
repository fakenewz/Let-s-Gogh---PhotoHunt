const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizResultsSchema = new Schema({
  username: String,
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const QuizResults = mongoose.model("QuizResults", quizResultsSchema);

module.exports = QuizResults;
