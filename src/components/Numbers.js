import React, {Component} from 'react';
import {range} from 'lodash'

class Numbers extends Component {

  getNumberClass = (number) => {
    if(this.props.selectedNumbers.includes(number)){
      return 'selected';
    }
  }

  render() {
    return(
      <div className="card text-center">
        <div className="numbers">
          {Numbers.list.map(i =>
            <span key={i}
                  className={this.getNumberClass(i)}
                  onClick={() => this.props.onNumberClickHandler(i)}>
                  {i}
            </span>
          )}
        </div>
      </div>
    )
  }
}

Numbers.list = range(1,10); //TODO: what does this do?

export default Numbers;
