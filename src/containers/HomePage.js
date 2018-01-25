import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";

import About from "../components/About";

import { getGithubURL } from "../config";

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
            <CircularProgress className="Progress" />
          ) : (
            <About userDetails={this.state.userDetails} />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
