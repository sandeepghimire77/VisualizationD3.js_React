import React, { Component } from "react";

import D3 from "../src/D3/d3";
import classes from './App.css';
class App extends Component {
  render() {
    return (
        <div className="App">
          <p className='Heading'> Visualization </p>
          <D3 />
        </div>
    );
  }
}

export default App;