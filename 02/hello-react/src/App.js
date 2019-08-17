import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = 'Are you Awesome?';
    
    return (
      <Fragment>
        <h1>Hi React!</h1>
        <h2>{text}</h2>
      </Fragment>
    );
  }
}
export default App;