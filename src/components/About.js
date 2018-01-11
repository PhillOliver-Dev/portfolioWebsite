import React, { Component } from "react";
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

class About extends Component {
  render() {
    return (
      <Card className="AppCard">
        <CardContent>
          <Typography type="headline" component="h1">
            {"About Me"}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default About;
