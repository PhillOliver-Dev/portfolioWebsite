import React, { Component } from "react";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import githubLogo from "../assets/github.svg";

import { style } from "../styles/components/Project.style";

class Project extends Component {
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
        <CardContent />
      </Card>
    );
  }
}

export default Project;
