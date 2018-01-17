import React, { Component } from "react";

import { style } from "../styles/containers/HomePage.style";
import About from "../components/About";
import Projects from "../containers/Projects";

class HomePage extends Component {
  render() {
    return (
      <div style={style.homePage}>
        <div style={style.elem}>
          <About />
          <Projects />
        </div>
      </div>
    );
  }
}

export default HomePage;
