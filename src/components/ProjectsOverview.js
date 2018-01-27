import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Typography from "material-ui/Typography";

import { getGithubURL } from "../config";

class ProjectsOverview extends Component {
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
        console.log(out);
        this.setState({
          projectURLs: out,
          isLoading: false
        });
      });
  }

  render() {
    return <div>{this.state.isLoading.toString()}</div>;
  }
}

export default ProjectsOverview;
