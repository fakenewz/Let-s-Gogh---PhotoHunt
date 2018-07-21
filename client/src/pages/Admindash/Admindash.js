import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Admindash extends Component {
  state = {
    quizcode: [],
    username: "",
    userresults: ""
  };

  componentDidMount() {
    this.loadQuizzes();
  }

  loadQuizzes = () => {
    API.getQuizzes()
      .then(res =>
        this.setState({ quizcode: res.data, quiztitle: "", quizlocation: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteQuiz = id => {
    API.deleteQuiz(id)
      .then(res => this.loadQuizzes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.quiztitle && this.state.quizlocation) {
      API.saveQuiz({
        quiztitle: this.state.quiztitle,
        quizlocation: this.state.quizlocation,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadQuizzes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-6">
            <Jumbotron>
              <h1>TEST</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.quiztitle}
                onChange={this.handleInputChange}
                name="quiztitle"
                placeholder="____ (required)"
              />
              <Input
                value={this.state.quizlocation}
                onChange={this.handleInputChange}
                name="quizlocation"
                placeholder="____ (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="____ (Optional)"
              />
              <FormBtn
                disabled={!(this.state.quiztitle && this.state.quizlocation)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="sm-6">
            <Jumbotron>
              <h1>Quiz</h1>
            </Jumbotron>
            {this.state.quizcode.length ? (
              <List>
                {this.state.quizcode.map(quizcd => (
                  <ListItem key={quizcd._id}>
                    <Link to={"/musuemquiz/" + quizcd._id}>
                      <strong>
                        {quizcd.quiztitle} and {quizcd.quizlocation}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteQuiz(quizcd._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Admindash;
