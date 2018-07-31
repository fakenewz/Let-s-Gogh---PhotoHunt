import React, { Component } from 'react';
import Footer from "../../components/Footer";
import API from "./../../utils/API";
// import ReactDom from 'react-dom';
// import Popup from 'react-popup';

class radioButtons extends Component {
  constructor() {
    super();

    this.state = {
      answersArray: [],
      answer1: "",
      answer2: "",
      picture: "",
      questions: [],
      isButtonDisabled: false,
      count: 1
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData(window.localStorage.code)
  };

  getData = (codeID) => {
    let stateVar = this.state.questions
    console.log("ffffffff", stateVar)
    console.log("gggggggg", codeID)
    API.getQuizByCode(codeID)
    .then(res =>
      this.setState({
        questions: stateVar.concat(res.data),
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

  handleChange3 = (event3) => {
    switch (event3.target.name) {
      case 'picture':
      this.setState({ picture: event3.target.files[0] })
     break;
    default: 
      this.setState({ [event3.target.name]: event3.target.value })
    }
  }

  handleSubmit = event4 => {
    const { answer1, answer2, picture } = this.state;
    let quizdata = new FormData();

      quizdata.append('answer1', answer1); 
      console.log("unicorns", answer1)
      quizdata.append('answer2', answer2);
      console.log("penguins", answer2)
      quizdata.set('picture', picture);
      console.log("narwhals", picture)
      console.log("quizData", quizdata)
      quizdata.append("answersArray", this.state.answersArray.concat(this.state.answer1, this.state.answer2))

    API.saveStudentquiz(quizdata)
    .then(() => {
      window.localStorage.clear()

      this.setState({
        isButtonDisabled: true
      })
    })
      .catch(err => console.log(err)); 
  }
  
  
  calcScore = (adminAnswers, studentAnswers) => {
    // const { count } = this.state
    for (let i = 0; i < adminAnswers.length; i++) {
        if(adminAnswers[i] === studentAnswers[i]) {
          this.state.count = this.state.count + 1,
          console.log("Dracula", this.state.count)

        } else {
          console.log("Not the same") 
        }
    }
  }

  render() {
    const { answer1, answer2, picture } = this.state;
    let fromUser = this.state.answersArray.concat(this.state.answer1, this.state.answer2);

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

              <input type="file"
                name="picture"
                onChange={this.handleChange3}
              />

                {console.log("broomsticks", fromUser)}
                {console.log("toads", q.correctOnes)}

                {/* return the score */}
                {this.calcScore(q.correctOnes, fromUser)}
                {this.state.count / 2}

              </div>
            </li>
             )
          )
        }
        
        {/* <Popup trigger={<button> Button </button>} position="right center">
          <div>TESTING</div>
        </Popup> */}

        <button type="submit" disabled={this.state.isButtonDisabled}> Submit Answer </button>

       </form>
      </div>
      )
    } 
  }
  export default radioButtons

