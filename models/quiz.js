const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  question1: { type: String, required: true },
  a1: { type: String, required: false },
  a2: { type: String, required: false },
  a3: { type: String, required: false },
  a4: { type: String, required: false },
  aRight: { type: String, required: false },
  question2: { type: String, required: true },
  b1: { type: String, required: false },
  b2: { type: String, required: false },
  b3: { type: String, required: false },
  b4: { type: String, required: false },
  photo: { type: String, required: true },
  bRight: { type: String, required: false },
  correctOnes: [{ type: String }],
  date: { type: Date, default: Date.now }
});


const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
