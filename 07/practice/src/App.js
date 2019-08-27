import React, { Component } from 'react';
import LifeCycle from './LifeCycle.js'

function getRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Create new Color</button>
        <LifeCycle color={this.state.color}></LifeCycle>
      </div>
    );
  }
}

export default App;