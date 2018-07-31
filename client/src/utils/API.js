import axios from "axios";

const cloudinary_url='https://api.cloudinary.com/v1_1/dfdpnpq6l/upload';

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
  // Get quiz by code
  getQuizByCode: function(w) {
    return axios.get("/studentquiz/" + w);
  },
  // Delete
  deleteQuiz: function(e) {
    return axios.delete("/musuemquiz" + e);
  },
  // Save
  saveQuiz: function(musuemQuizData) {
    return axios.post("/musuemquiz", musuemQuizData);
  },


  // This goes to Cloudinary, saves the image and
  // returns with the required payload

  saveFileToCloudinary: (fileInfo) => {
    const fileData = new FormData();
    fileData.append('file', fileInfo);
    fileData.append('upload_preset','g8u4bubj');   
    console.log(fileData)
   return axios.post(cloudinary_url, 
    fileData, {
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then((response) => {
          console.log(response, 'success')
          return response;
   })
   .catch((error) => {
     console.log(error, 'error');
   })
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
    return axios.get("logout")
  },

  saveStudentquiz: function(o) {
      return axios({
        method: 'post',
        url: "/studentquiz/",
        data: o,
        headers: {
          Accept:'application/json',
          'Content-Type': 'multipart/form-data'
        }
       });
      },
     
};


