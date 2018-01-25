import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";

import Project from "../components/Project";

import { getGithubURL } from "../config";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      projectURLs: []
    };
  }

  componentDidMount() {
    fetch(getGithubURL("/repos"))
      .then(res => res.json())
      .then(out => {
        this.setState({
          projectURLs: out,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <CircularProgress className="Progress" />
        ) : (
          <div>
            {this.state.projectURLs.map(project => (
              <div>
                <Project prObject={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Projects;
