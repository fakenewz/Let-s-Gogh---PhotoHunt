import React, { Component } from 'react';
import Footer from "../../components/Footer";
import API from "./../../utils/API";


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
      file: {},
      correctAnswers: [],
      result: 0,
      resultReady:false
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentDidMount() {
    this.getData(window.localStorage.code)
  };

  getData = (codeID) => {
    let stateVar = this.state.questions
    //console.log("ffffffff", stateVar)
    //console.log("gggggggg", codeID)
    API.getQuizByCode(codeID)
    .then((res) => {
      console.log(res, 'fetched data')
      this.setState({
        questions: stateVar.concat(res.data),
        correctAnswers: res.data.correctOnes
      })
    })
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
      case 'picture':  this.handleImageUpload(event3.target.files[0]);
     break;
    default: 
      this.setState({ [event3.target.name]: event3.target.value })
      //console.log ()
    }
  }

  handleImageUpload(file) {
    this.setState({ isButtonDisabled: true})
    API.saveFileToCloudinary(file)
    .then((response) =>{
      this.setState({ picture: response.data.secure_url, isButtonDisabled: false});
    })
    .catch(error => console.log(error, 'nah...error occured'));
    console.log(this.state);
  }

  handleSubmit = event4 => {
    event4.preventDefault();
    const fromUser = this.state.answersArray.concat(this.state.answer1, this.state.answer2);  
     const result =  this.calcScore(this.state.correctAnswers, fromUser);
    //  console.log(`you scored ${result} out of ${this.state.correctAnswers.length}`)
    this.setState({ result })
      if (this.state.picture !== '') {
        const { answer1, answer2, picture } = this.state;
        let quizdata = new FormData();
    
          quizdata.append('answer1', answer1); 
          //console.log("unicorns", answer1)
          quizdata.append('answer2', answer2);
          //console.log("penguins", answer2)
          quizdata.set('picture', picture);
         // console.log("narwhals", picture)
         // console.log("quizData", quizdata)
          // quizdata.set("answersArray")
        
        API.saveStudentquiz(quizdata)
        //  answersArray: this.state.answersArray.concat(this.state.answer1, this.state.answer2),})
        .then(() => {
          window.localStorage.clear()
    
          this.setState({
            isButtonDisabled: true
          })
        })
          .catch(err => console.log(err)); 
      } else {
        console.log('image not uploaded')
      }
  }
  
  
  calcScore = (adminAnswers, studentAnswers) => {

    let count = 0;
    for (let i = 0; i < adminAnswers.length; i++) {
        if(adminAnswers[i] === studentAnswers[i]) {
         count += 1
        }
    }
    this.setState({
      resultReady: true
    });
    return count;
  }

  render() {
    const { answer1, answer2, picture } = this.state;
    

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
                
                {/* {this.calcScore(q.correctOnes, fromUser)} */}
                {/* /{console.log("kittens", fromUser[0])} */}
                {/* {console.log("toads", q.correctOnes[0])} */}

              </div>
            </li>
             )
          )
        }
        
        <button disabled={this.state.isButtonDisabled}> Submit Answer </button>

       </form>
        
        {
          this.state.resultReady 
          ?
          <p>you scored {this.state.result} out of {this.state.correctAnswers.length}</p>
          :
          null
        }
      </div>
      )
    } 
  }
  export default radioButtons

