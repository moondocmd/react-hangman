import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman";
import { randomWord } from "./words.js";

class App extends Component {

  render() {
    console.log(randomWord());
    return (
      <div className="App">
        <Hangman answer={randomWord()} />
      </div>
    );
  }
}

export default App;
