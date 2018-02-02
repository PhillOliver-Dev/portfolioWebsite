import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";

import About from "../components/About";
import ProjectsOverview from "../components/ProjectsOverview";
import DevInfo from "../components/DevInfo";

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
            <div>
              <About userDetails={this.state.userDetails} />
              <ProjectsOverview repoUrl={this.state.userDetails.repos_url} />
              <DevInfo />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
