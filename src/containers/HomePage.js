import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";

import About from "../components/About";
import Projects from "../containers/Projects";

import { getGithubURL } from "../config";
import { styles } from "../styles/containers/HomePage.style.js";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      userDetails: {}
    };
  }

  componentDidMount() {
    fetch(getGithubURL())
      .then(res => res.json())
      .then(out => {
        this.setState({
          userDetails: out,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.isLoading ? (
            <CircularProgress style={styles.progress} />
          ) : (
            <About userDetails={this.state.userDetails} />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
