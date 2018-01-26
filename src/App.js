import React, { Component } from 'react';
import Game from './components/Game'
import './App.css';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
