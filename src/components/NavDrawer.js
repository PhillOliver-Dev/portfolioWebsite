import React, { Component } from "react";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import { Link } from "react-router-dom";
import { styles } from "../styles/components/NavDrawer.style";
import { navBarLinks } from "../config";

class NavDrawer extends Component {
  render() {
    return (
      <List>
        <ListItem button onClick={() => this.props.closeDrawer(false)}>
          <ListItemText primary=">" style={styles.rightButton} />
        </ListItem>
        {Object.keys(navBarLinks).map(key => {
          return (
            <Link to={navBarLinks[key].link}>
              <ListItem button onClick={() => this.props.closeDrawer(false)}>
                <ListItemText primary={key} />
              </ListItem>
              <Divider light />
            </Link>
          );
        })}
      </List>
    );
  }
}

export default NavDrawer;
