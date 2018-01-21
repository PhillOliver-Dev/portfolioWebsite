import React, { Component } from "react";

import About from "../components/About";
import Projects from "../containers/Projects";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <About />
          <Projects />
        </div>
      </div>
    );
  }
}

export default HomePage;
