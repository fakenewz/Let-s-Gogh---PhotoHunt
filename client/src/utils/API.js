import axios from "axios";

export default {
  // Gets all books
  getQuestion: function() {
    return axios.get("/api/question");
  },
 // Gets the book with the given id
  // getQuestion: function(id) {
  //   return axios.get("/api/question/" + id);
  // },
 // Deletes the book with the given id
  deleteQuestion: function(id) {
    return axios.delete("/api/question/" + id);
  },
  // Saves a book to the database
  saveQuestion: function(questionData) {
    return axios.post("/api/question", questionData);
  }
};
