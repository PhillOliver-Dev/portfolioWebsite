import React, { Component } from "react";
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

class Project extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card className="AppCard">
        <CardContent>
          <Typography type="headline" component="h1">
            {this.props.prObject.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Project;
