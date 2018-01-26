import React, {Component} from 'react'

class Buttons extends Component {

  getButton = () => {
    let button;
    switch(null){
      case true:
        button =
        <button className="btn btn-success">
          <i className="fa fa-check"></i>
        </button>;
        break;
      case false:
        button =
        <button className="btn btn-danger">
          <i className="fa fa-times"></i>
        </button>;
        break;
      default:
        button =
        <button className="btn">
              =
        </button>;
        break;
    }
    return button
  }

  render() {
    return (
      <div className="col-2 text-center">
        {this.getButton()}
        <br/><br/>
        <button className="btn btn-warning btn-sm"><i className="fa fa-refresh"></i></button>
      </div>
    )
  }
}

export default Buttons;
