import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Footer from "../../components/Footer";

class Admindash extends Component {
  state = {
    quizcode: [],
    code: "",
    question1: "",
    a1: "",
    a2: "", 
    a3: "", 
    a4: "",
    aRight: "",
    question2: "",
    b1: "",
    b2: "", 
    b3: "", 
    b4: "",
    bRight: "",
    photo: "",
    correctOnes: [],
    username: "",
  };

  componentDidMount() {
    this.loadQuizzes();
  }

  loadQuizzes = () => {
    API.getQuizzes()
      .then(res =>
        this.setState({ quizcode: res.data, code: "", question1: "", a1: "", a2: "", a3: "", a4: "", aRight: "", question2: "", b1: "", b2: "", b3: "", b4: "", bRight: "", photo: "",})
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
    if (this.state.question1) {
      API.saveQuiz({
        code: this.state.code,
        question1: this.state.question1,
        a1: this.state.a1,
        a2: this.state.a2, 
        a3: this.state.a3, 
        a4: this.state.a4,
        aRight: this.state.aRight,
        question2: this.state.question2,
        b1: this.state.b1,
        b2: this.state.b2, 
        b3: this.state.b3, 
        b4: this.state.b4,
        bRight: this.state.bRight,
        photo: this.state.photo,
        correctOnes: this.state.correctOnes.concat(this.state.aRight, this.state.bRight),
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
              <h1>Quiz Template</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.code}
                onChange={this.handleInputChange}
                name="code"
                placeholder="code"
              />
              <Input
                value={this.state.question1}
                onChange={this.handleInputChange}
                name="question1"
                placeholder="question1"
              />
              <Input
                value={this.state.a1}
                onChange={this.handleInputChange}
                name="a1"
                placeholder="a1"
              />
              <Input
                value={this.state.a2}
                onChange={this.handleInputChange}
                name="a2"
                placeholder="a2"
              />
              <Input
                value={this.state.a3}
                onChange={this.handleInputChange}
                name="a3"
                placeholder="a3"
              />
              <Input
                value={this.state.a4}
                onChange={this.handleInputChange}
                name="a4"
                placeholder="a4"
              />
              <Input
                value={this.state.aRight}
                onChange={this.handleInputChange}
                name="aRight"
                placeholder="aRight"
              />
              <Input
                value={this.state.question2}
                onChange={this.handleInputChange}
                name="question2"
                placeholder="question2"
              />
              <Input
                value={this.state.b1}
                onChange={this.handleInputChange}
                name="b1"
                placeholder="b1"
              />
              <Input
                value={this.state.b2}
                onChange={this.handleInputChange}
                name="b2"
                placeholder="b2"
              />
              <Input
                value={this.state.b3}
                onChange={this.handleInputChange}
                name="b3"
                placeholder="b3"
              />
              <Input
                value={this.state.b4}
                onChange={this.handleInputChange}
                name="b4"
                placeholder="b4"
              />
              <Input
                value={this.state.bRight}
                onChange={this.handleInputChange}
                name="bRight"
                placeholder="bRight"
              />
              <Input
                value={this.state.photo}
                onChange={this.handleInputChange}
                name="photo"
                placeholder="Upload a Photo"
              />
              <FormBtn
                disabled={!(this.state.question1)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="sm-6">
            <Jumbotron>
              <h1></h1>
            </Jumbotron>
            {this.state.quizcode.length ? (
              <List>
                {this.state.quizcode.map(quizcd => (
                  <ListItem key={quizcd._id}>
                      <strong>
                        {quizcd.code}
                      </strong>
                    <DeleteBtn onClick={() => this.deleteQuiz(quizcd._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Footer></Footer>
      </Container> 
    );
  }
}

export default Admindash; 
