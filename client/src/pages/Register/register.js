import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import API from "../../utils/API"; 
import Jumbotron from "../../components/Jumbotron";
import { Input, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid"; 
import Footer from "../../components/Footer";

class registerHere extends Component {
    state = {
        username: "",
        password: "",
        redirectTo: null
      }; 

newInputChange = event => {
    const { name, value } = event.target;    
    this.setState({
      [name]: value
    });
};

newFormSubmit = event => {
    console.log("dgdg", this.state.username)
    console.log("nnnnnnn", this.state.password)

    event.preventDefault();

    API.saveSignUp ({
        username: this.state.username,
        password: this.state.password,
    })
    .then(
      res => {
      this.setState({
        redirectTo: '/admindash'
      })
     }
    )
        .catch(err => console.log(err));
  }

  /*******/


  render() {
    if (this.state.redirectTo) {
      return <Redirect to = {{ pathname: this.state.redirectTo }} />
    } else {
    return (
       <Container fluid>
        <Jumbotron>
          <h1>Sign Up!</h1>
        </Jumbotron>
        <form>
          <Input
            type="text"
            value={this.state.username}
            onChange={this.newInputChange}
            name="username"
            placeholder="Username"
          />
          <Input
            type="text"
            value={this.state.password}
            onChange={this.newInputChange}
            name="password"
            placeholder="Password"
          />
          <FormBtn
            disabled={!(this.state.username)}
            onClick={this.newFormSubmit}
          >
            Submit
          </FormBtn>       
        </form>
        <footer>test</footer>
        </Container>
    )
   }
 }
}

export default registerHere;