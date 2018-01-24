import React, { Component } from "react";
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

class Project extends Component {
  decameliseText = text => {
    return (
      text.charAt(0).toUpperCase() + text.replace(/([A-Z])/g, " $1").slice(1)
    );
  };

  render() {
    return (
      <Card className="AppCard">
        <CardContent>
          <Typography type="headline" component="h1">
            {this.decameliseText(this.props.prObject.name)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Project;
