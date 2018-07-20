import React, { Component } from "react";
import API from "../../utils/API"; 
import Jumbotron from "../../components/Jumbotron";
import { Input, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid"; 
import Footer from "../../components/Footer";

class quizCreation extends Component {
    state = {
        codeArray: [],
        code: "",
        studentID: "",
      }; 

handleInputChange = event => {
    const { name, value } = event.target;    
    this.setState({
      [name]: value
    });
};

  codeSubmit = event => {
    console.log("dogs", this.state.studentID)
    console.log("cats", this.state.code)

    event.preventDefault();

    if (!this.state.studentID || !this.state.code) {
      alert("Please fill out the form");
    } else if (this.state.code.length !== 4) {
      alert("Please enter the 4-digit code provided to you");
    } 

    API.saveCode ({
        code: this.state.code,
        studentID: this.state.studentID,
    })
    .then(
      res => {
      console.log("testing", res)

      this.setState({
        codeArray: res.data,
      })
     }
    )
        .catch(err => console.log(err));

  };


  render() {
    console.log("zxcvbb", this.state.codeArray)
    return (
       <Container fluid>
        <Jumbotron>
          <h1>Enter Info</h1>
        </Jumbotron>
        <form>
          <Input
            type="text"
            value={this.state.studentID}
            onChange={this.handleInputChange}
            name="studentID"
            placeholder=""
          />
          <Input
            type="text"
            value={this.state.code}
            onChange={this.handleInputChange}
            name="code"
            placeholder=""
          />
          <FormBtn
            disabled={!(this.state.code) && !(this.state.studentID)}
            onClick={this.codeSubmit}
          >
            Submit
          </FormBtn>
        </form>
        <footer></footer>
        </Container>
    )
  }
}

export default quizCreation;