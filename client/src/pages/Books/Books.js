import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {


  render() {
    return (
      <Container fluid>
            <Jumbotron>
              <h1>Placeholder</h1>
            </Jumbotron>
      </Container>
    );
  }
}

export default Books;
