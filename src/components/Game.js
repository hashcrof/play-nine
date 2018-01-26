import React, { Component } from 'react';
import Answer from './Answer'
import Stars from './Stars'
import Numbers from './Numbers'
import Buttons from './Buttons'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumberOfStars: this.generateRandomNumberOfStars(),
      selectedNumbers: [],
    }
  }

  generateRandomNumberOfStars = () => {
    return 1 + Math.floor(Math.random() * 9)
  }

  onNumberClickHandler = (number) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(number)
    }))
  }

  onAnswerClickHandler = (number) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(n => n !== number)
    }))
  }

  render() {
    return (
      <div className="container">
        <h3> Play Nine </h3>
        <hr/>
        <div className="row">
          <Stars numberOfStars={this.state.randomNumberOfStars} />
          <Buttons />
          <Answer selectedNumbers={this.state.selectedNumbers}
                  onAnswerClickHandler={this.onAnswerClickHandler}
          />
        </div>
        <br/><br/>
        <Numbers selectedNumbers={this.state.selectedNumbers}
                 onNumberClickHandler={this.onNumberClickHandler}
        />
      </div>
    )
  }
};

export default Game;
