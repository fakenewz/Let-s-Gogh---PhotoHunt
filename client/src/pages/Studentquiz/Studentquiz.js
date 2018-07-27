import React, { Component } from 'react';
import './Studentquiz.css';
import Footer from "../../components/Footer";
import API from "./../../utils/API"
import "./Studentquiz.css";

class radioButtons extends Component {
  constructor() {
    super();

    this.state = {
      answersArray: [],
      answer1: "",
      answer2: "",
      quiz: { "title": "Field Museum: Fact or Fiction?", "image": "../../dinosaur.GIF", "introduction": "What happened to the dinosaurs? Where are their living descendants? Test your knowledge as you tour the Field Museum's latest exhibit!" },
      currentQuestionIndex: 0,
      questions: [],
      isButtonDisabled: false
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData()
  };

  getData = () => {
    API.getQuizzes()
      .then(res =>
        this.setState({
          questions: res.data
        })
      )
      .catch(err => console.log(err));
  }

  handleChange1 = (event1) => {
    this.setState({
      answer1: event1.target.value
    });
  }

  handleChange2 = (event2) => {
    this.setState({
      answer2: event2.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    API.saveStudentquiz({
      answer1: this.state.answer1,
      answer2: this.state.answer2,
      answersArray: this.state.answersArray.concat(this.state.answer1, this.state.answer2),
    }).then(
      this.setState({
        isButtonDisabled: true
      })
    )
      .catch(err => console.log(err));
  }

  // displayContent = questionList.map((item, index) => (
  //   <li key={index}>{item.answers[0]} {item.answers[1]}</li>
  //  ));
  //  displayContent = (
  //      <li>{this.state.questions[0].answers[0]}</li>
  // )


  render() {
    let questionList = this.state.questions;
    // console.log("balh", this.state.answersArray)
    // console.log("dfdfddfd", this.state.questions)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          {this.state.questions.map((ques, index) => (

          <li key={index}>
              <div id="coffee">
                {ques.question1}

                <input type="radio"
                  name="coffee"
                  value={ques.a1}
                  checked={this.state.answer1 === ques.a1}
                  onChange={this.handleChange1}
                />
                {ques.a1}

                <input type="radio"
                  name="coffee"
                  value={ques.a2}
                  checked={this.state.answer1 === ques.a2}
                  onChange={this.handleChange1}
                />
                {ques.a2}

                <input type="radio"
                  name="coffee"
                  value={ques.a3}
                  checked={this.state.answer1 === ques.a3}
                  onChange={this.handleChange1}
                />
                {ques.a3}

                <input type="radio"
                  name="coffee"
                  value={ques.a4}
                  checked={this.state.answer1 === ques.a4}
                  onChange={this.handleChange1}
                />
                {ques.a4}

              </div>

            </li>
          )
          )
          }

        {/* //   <button type="submit" disabled={this.state.isButtonDisabled}> Submit Answer </button> */}

        {/* // </form> */}

        {/* // <form onSubmit={this.handleSubmit}> */}

          {this.state.questions.map((q, i) => (

            <li key={i}>
              <div id="cups">
                {q.question2}

                <input type="radio"
                  name="cups"
                  value={q.b1}
                  checked={this.state.answer2 === q.b1}
                  onChange={this.handleChange2}
                />
                {q.b1}

                <input type="radio"
                  name="cups"
                  value={q.b2}
                  checked={this.state.answer2 === q.b2}
                  onChange={this.handleChange2}
                />
                {q.b2}

                <input type="radio"
                  name="cups"
                  value={q.b3}
                  checked={this.state.answer2 === q.b3}
                  onChange={this.handleChange2}
                />
                {q.b3}

                <input type="radio"
                  name="cups"
                  value={q.b4}
                  checked={this.state.answer2 === q.b4}
                  onChange={this.handleChange2}
                />
                {q.b4}
              </div>
            </li>
             )
          )
          }

          <button type="submit" disabled={this.state.isButtonDisabled}> Submit Answer </button>
        </form>
      </div>
      )
    }
  }
  export default radioButtons
