import React, { Component } from "react";
import ClickyBoard from "./components/ClickyBoard";
import images from "./images";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,

    Message2: '',
    Message: 'Click an image to begin!',
    animals: this.shuffleArray(),
    wasClicked: [],
    shake: false
  };

  clickEvent = this.checkClicked.bind(this);

  shuffleArray() {
    const newArr = images.slice();
    const shuffleArr = [];

    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }
    return shuffleArr;
  }

  checkClicked(clickedElem) {
    const prevState = this.state.wasClicked.slice();

    const shuffled = this.shuffleArray();
    let score = this.state.score;
    let highScore = this.state.highScore;
    if (!this.state.wasClicked.includes(clickedElem)) {
      if (score === highScore) {
        score++;
        highScore++;

      } else {
        score++;
      }

      prevState.push(clickedElem);
    }

    if (this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        animals: shuffled,
        score: score,
        highScore: highScore,
        Message2: 'incorrect',
        Message: 'Incorrect guess!',
        wasClicked: [],
        shake: true
      });
    }

    this.setState({
      score: score,
      highScore: highScore,
      animals: shuffled,
      Message2: 'correct',
      Message: 'You Guessed Correctly!',
      wasClicked: prevState,
      shake: false
    });

    return setTimeout(() => this.setState({ Message2: '' }), 500);
  }

  render() {
    const state = this.state;
    return (
      <div>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          Message={state.Message}
          Message2={state.Message2}
        />
        <Jumbotron />
        <ClickyBoard
          shake={state.shake}
          characters={state.animals}
          clickEvent={this.clickEvent}
        />
      </div>
    );
  }
}

export default App;