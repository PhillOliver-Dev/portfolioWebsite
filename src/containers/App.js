import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Drawer from "material-ui/Drawer";

import Header from "../components/Header";
import HomePage from "./HomePage";
import ContactPage from "../components/ContactPage";
import NavDrawer from "../components/NavDrawer";

const Home = () => {
  return <HomePage className="AppCard" />;
};

const Contact = () => {
  return <ContactPage className="AppCard" />;
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
      <BrowserRouter>
        <div className="App">
          <Drawer type="persistent" open={this.state.isDrawerOpen}>
            <NavDrawer closeDrawer={this.changeDrawerOpen} />
          </Drawer>
          <Header openDrawer={this.changeDrawerOpen} />
          <div className="Content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
