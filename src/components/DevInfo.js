import React, { Component } from "react";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";

import githubLogo from "../assets/github.svg";
import content from "../assets/content.json";

class DevInfo extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title={
            <Typography type="subheading" component="h1">
              {"Website Created By"}
            </Typography>
          }
          action={
            <IconButton
              color="contrast"
              aria-label="Menu"
              className="Invert"
              href="https://github.com/PhillOliver-Dev"
            >
              <img src={githubLogo} alt="logo" />
            </IconButton>
          }
        />
        <CardContent>
          <Typography type="caption">{content.homepageText}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default DevInfo;
