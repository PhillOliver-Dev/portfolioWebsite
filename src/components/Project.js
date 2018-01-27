import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import ReactMarkdown from "react-markdown";

import githubLogo from "../assets/github.svg";

import { getReadMeUrl } from "../config";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      readMeContent: null,
      isLoading: true
    };
  }

  componentDidMount = () => {
    fetch(getReadMeUrl(this.props.prObject.name))
      .then(res => res.text())
      .then(out => {
        this.setState({
          readMeContent: out,
          isLoading: false
        });
      });
  };

  decameliseText = text => {
    return (
      text.charAt(0).toUpperCase() + text.replace(/([A-Z])/g, " $1").slice(1)
    );
  };

  render() {
    return (
      <Card className="AppCard">
        <CardHeader
          title={
            <Typography type="headline" component="h1">
              {this.decameliseText(this.props.prObject.name)}
            </Typography>
          }
          action={
            <IconButton
              color="contrast"
              aria-label="Menu"
              className="Invert"
              href={this.props.prObject.html_url}
            >
              <img src={githubLogo} alt="logo" />
            </IconButton>
          }
        />
        <Card>
          <CardContent>
            {!this.state.isLoading ? (
              <ReactMarkdown source={this.state.readMeContent} />
            ) : (
              <CircularProgress className="Progress" />
            )}
          </CardContent>
        </Card>
      </Card>
    );
  }
}

export default Project;
