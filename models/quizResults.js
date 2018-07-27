const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("../models");

const quizResultsSchema = new Schema({
  // _id: { type: Schema.Types.ObjectId, ref: 'Quiz' },
  answer1: {type: String, required: false},
  answer2: {type: String, required: false},
  correct: { type: String, required: false },
  answersArray: [{ type: String }],
  date: { type: Date, default: Date.now }
});

const QuizResults = mongoose.model("QuizResults", quizResultsSchema);

module.exports = QuizResults;
