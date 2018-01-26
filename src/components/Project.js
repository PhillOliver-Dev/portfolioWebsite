import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import ReactMarkdown from "react-markdown";

import githubLogo from "../assets/github.svg";

import { getReadMeUrl } from "../config";
import { style } from "../styles/components/Project.style";

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
              style={style.navButton}
              href={this.props.prObject.html_url}
            >
              <img src={githubLogo} alt="logo" />
            </IconButton>
          }
        />
        <Card>
          <CardHeader
            title={
              <Typography type="subheading" component="i">
                README.md
              </Typography>
            }
          />
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
