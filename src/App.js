import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import Photo from "./components/Photo";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/gallery/:id" component={Photo} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/gallery" />
          <Redirect to="/not-found" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
