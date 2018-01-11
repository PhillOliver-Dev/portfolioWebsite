import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

import { style } from "../styles/components/Header.style";
import githubLogo from "../assets/github.svg";

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            Phillip Oliver
          </Typography>
          <IconButton
            color="contrast"
            aria-label="Menu"
            style={style.navButton}
            href="https://github.com/PhillOliver-Dev"
          >
            <img src={githubLogo} alt="logo" />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
