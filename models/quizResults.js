const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizResultsSchema = new Schema({
  answers: {type: String, required: false},
  correctyn: {type: String, required: false},
  // score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const QuizResults = mongoose.model("QuizResults", quizResultsSchema);

module.exports = QuizResults;
