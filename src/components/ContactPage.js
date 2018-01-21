import React, { Component } from "react";
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

class ContactPage extends Component {
  render() {
    return (
      <Card className="AppCard">
        <CardContent>
          <Typography type="headline" component="h1">
            {"Contact me"}
          </Typography>
          <Typography component="p">{"Test"}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default ContactPage;
