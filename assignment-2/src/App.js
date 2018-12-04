import React, { Component } from "react";

import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputText: ""
  };
  changeTextHandler = event => {
    this.setState({
      inputText: event.target.value
    });
  };
  deleteCharacterHandler(index){
    let inputTextArray = this.state.inputText.split('');
    inputTextArray.splice(index, 1);
    this.setState({
      inputText: inputTextArray.join('')
    })
  }
  render() {
    const inputStyle = {
      backgroundColor: "#ccc",
      border: "none",
      padding: "16px",
      fontSize: "1.4em"
    };
    return (
      <div className="App">
        <input
          onChange={this.changeTextHandler}
          value={this.state.inputText}
          placeholder="Type some text..."
          style={inputStyle}
          type="text"
        />
        <p>{this.state.inputText.length}</p>
        <ValidationComponent textLength={this.state.inputText.length} />
        <div>
          {this.state.inputText.split('').map((char, index) => {
            return <CharComponent 
            click={() => this.deleteCharacterHandler(index)}
            key={index} 
            character={char} />;
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
