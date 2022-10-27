import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [userInput, setUserInput] = useState("");
  function inputChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={inputChangeHandler}></input>
      <div> Welcome {userInput} </div>
    </div>
  );
}
