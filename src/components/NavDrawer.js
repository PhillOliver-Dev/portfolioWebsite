import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import List, {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader
} from "material-ui/List";
import Divider from "material-ui/Divider";
import { Link } from "react-router-dom";
import { styles } from "../styles/components/NavDrawer.style";
import { navBarLinks } from "../config";

class NavDrawer extends Component {
  render() {
    return (
      <List className="NavBar">
        <ListItem button onClick={() => this.props.closeDrawer(false)}>
          <ListItemText primary=">>" style={styles.rightButton} />
        </ListItem>
        <ListSubheader>Menu</ListSubheader>
        {Object.keys(navBarLinks).map(key => {
          return (
            <Link to={navBarLinks[key].link} key={key}>
              <ListItem button onClick={() => this.props.closeDrawer(false)}>
                <ListItemIcon>
                  <Avatar style={styles.avatar}>{key.charAt(0)}</Avatar>
                </ListItemIcon>
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
