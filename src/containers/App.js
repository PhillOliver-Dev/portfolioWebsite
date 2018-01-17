import React, { Component } from "react";

import Header from "../components/Header";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage className="centered" />
      </div>
    );
  }
}

export default App;
