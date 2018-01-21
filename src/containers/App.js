import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Drawer from "material-ui/Drawer";

import Header from "../components/Header";
import HomePage from "./HomePage";
import ContactPage from "../components/ContactPage";

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
            {"Test"}
          </Drawer>
          <Header openDrawer={this.changeDrawerOpen} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
