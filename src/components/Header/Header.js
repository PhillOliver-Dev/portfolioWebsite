import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

import githubLogo from "../../assets/github.svg";

import "./Header.css";

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
            className="logo"
            href="https://www.github.com/"
          >
            <img src={githubLogo} alt="logo" />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
