import React, { Component } from "react";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import BannerImg from "../assets/banner.jpg";

import { styles } from "../styles/components/About.style.js";

class About extends Component {
  render() {
    return (
      <Card className="AppCard">
        <CardHeader
          avatar={<Avatar src={this.props.userDetails["avatar_url"]} />}
          title={
            <Typography type="headline" component="h1">
              {"About Me"}
            </Typography>
          }
        />
        <CardContent>
          <Typography type="subheading" component="h1">
            {this.props.userDetails.bio}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default About;
