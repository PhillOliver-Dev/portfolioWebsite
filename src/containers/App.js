import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Drawer from "material-ui/Drawer";

import Header from "../components/Header";
import HomePage from "./HomePage";
import NavDrawer from "../components/NavDrawer";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="AppCard">
      <HomePage />
    </div>
  );
};

const ProjList = () => {
  return <Projects className="AppCard" />;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDrawerOpen: false
    };
  }

  changeDrawerOpen = isDrawerOpen => {
    this.setState({
      isDrawerOpen
    });
  };

  render() {
    return (
      <BrowserRouter basename="/portfolioWebsite">
        <div className="App">
          <Drawer type="persistent" open={this.state.isDrawerOpen}>
            <NavDrawer closeDrawer={this.changeDrawerOpen} />
          </Drawer>
          <Header openDrawer={this.changeDrawerOpen} />
          <div className="Content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={ProjList} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
