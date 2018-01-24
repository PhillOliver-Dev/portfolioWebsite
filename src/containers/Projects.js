import React, { Component } from "react";

import Project from "../components/Project";

import { getGithubURL } from "../config";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectURLs: []
    };
  }

  componentDidMount() {
    fetch(getGithubURL("/repos"))
      .then(res => res.json())
      .then(out => {
        this.setState({
          projectURLs: out
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.projectURLs.map(project => (
          <div>
            <Project prObject={project} />
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
