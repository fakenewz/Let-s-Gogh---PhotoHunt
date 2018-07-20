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
  // Save
  saveCode: function(quizData) {
    return axios.post("/quizcreation", quizData);
  },


  // Get all
  getQuizzes: function() {
    return axios.get("/musuemquiz");
  },
  // Get for given id
  getQuiz: function(e) {
    return axios.get("/musuemquiz" + e);
  },
  // Delete
  deleteQuiz: function(e) {
    return axios.delete("/musuemquiz" + e);
  },
  // Save
  saveQuiz: function(musuemQuizData) {
    return axios.post("/musuemquiz", musuemQuizData);
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
//Studentquiz
saveStudentquiz: function(saveResults) {
  return axios.post("/studentquiz", saveResults )
}
};
