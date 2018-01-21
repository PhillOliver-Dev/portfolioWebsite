import React, { Component } from "react";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import { styles } from "../styles/components/NavDrawer.style";

class NavDrawer extends Component {
  render() {
    return (
      <List>
        <ListItem button onClick={() => this.props.closeDrawer(false)}>
          <ListItemText primary=">" style={styles.rightButton} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Projects" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    );
  }
}

export default NavDrawer;
