import axios from "axios";

export default {
  // Get all
  getCodes: function() {
    return axios.get("/quizcreation");
  },
  // Get for given id
  getCode: function(id) {
    return axios.get("/quizcreation" + id);
  },
  // Delete
  deleteCode: function(id) {
    return axios.delete("/quizcreation" + id);
  },
  // Saves a book to the database
  saveCode: function(quizData) {
    return axios.post("/quizcreation", quizData);
  },

  //Homepage
  homePage: function() {
    return axios.get("/")
  },
  //Register
  signUp: function() {
    return axios.get("/register")
  },
  saveSignUp: function(saveUser) {
    return axios.post("/register", saveUser)
  },
  //Register
  signIn: function() {
    return axios.get("/login")
  },
  saveSignIn: function(loginUser) {
      return axios.post("/login", loginUser)
    },
  //Register
  signOut: function() {
    return axios.get("/logout")
  },
};
