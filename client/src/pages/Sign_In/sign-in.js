import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import API from "../../utils/API"; 
import Jumbotron from "../../components/Jumbotron";
import { Input, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid"; 
import { Link } from "react-router-dom";

class passPort extends Component {
    state = {
        username: "",
        password: "",
        code: "",
        studentID: "",
        redirectTo: null,
      }; 

handleInputChange = event => {
    const { name, value } = event.target;    
    this.setState({
      [name]: value
    });
};

handleFormSubmit = event => {
    console.log("dgdg", this.state.username)
    console.log("nnnnnnn", this.state.password)

    event.preventDefault();

    API.saveSignIn ({
        username: this.state.username,
        password: this.state.password,
    })
  //   .then(
  //     res => {
  //     this.setState({
  //       redirectTo: '/admindash'
  //     })
  //    }
  //   )
  //       .catch(err => console.log(err));
  // }

   .then(() => {
    this.props.history.push('/admindash')
   }).catch((error) => {
    console.log("blah blah")
    console.log(error)
   })
  }
  /*******/

  codeInputChange = event => {
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
    .then(() => {
      this.props.history.push('/studentquiz')
    }).catch((error) => {
      console.log("blah blah")
      console.log(error)
    })

  };

    /*******/

  render() {
    if (this.state.redirectTo) {
      return <Redirect to = {{ pathname: this.state.redirectTo }} />
    } 
    else {
    return (
       <Container fluid>
        <Jumbotron>
          <h1>TEST TEST</h1>
        </Jumbotron>
        <form>
          <Input
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
            name="username"
            placeholder="Username"
          />
          <Input
            type="text"
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password"
          />

          <Link to={"/register"}>
            <strong>
            Click here to Sign Up!
            </strong>
          </Link>

          <FormBtn
            disabled={!(this.state.username)}
            onClick={this.handleFormSubmit}
          >
            Submit
          </FormBtn>
        </form>

        <form>
          <Input
            type="text"
            value={this.state.studentID}
            onChange={this.codeInputChange}
            name="studentID"
            placeholder="StudentID"
          />
          <Input
            type="text"
            value={this.state.code}
            onChange={this.codeInputChange}
            name="code"
            placeholder="4-Digit Code"
          />
          <FormBtn
            disabled={!(this.state.code) && !(this.state.studentID)}
            onClick={this.codeSubmit}
          >
            Submit
          </FormBtn>
        </form>
        </Container>
    )
   }
 }
}

export default passPort;