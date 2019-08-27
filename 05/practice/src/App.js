import React, {Component} from 'react';
import './App.css';
import Scrollbox from './Scrollbox';


class App extends Component {
  render() {
    return (
      <div>
        <Scrollbox ref={(ref) => this.scrollBox=ref}></Scrollbox>
        <button onClick={() => this.scrollBox.scrolltoBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
