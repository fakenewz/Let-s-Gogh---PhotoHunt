import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import API from "../../utils/API"; 
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid"; 

class logOut extends Component {

render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Logout</h1>
        </Jumbotron>   
      </Container>
    )
   } 
}

export default logOut;