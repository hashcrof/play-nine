import React, {Component} from 'react';

class Answer extends Component {

  printAnswer = (number, i) => {
    return <span key={i} onClick={() => this.props.onAnswerClickHandler(number)}>{number}</span>
  }

  render() {
    return (
      <div className="col-5">
        {this.props.selectedNumbers.map(this.printAnswer)}
      </div>
    )
  }

}

export default Answer;
