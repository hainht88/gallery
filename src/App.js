import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import http from "./Services/HttpService";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import Photo from "./components/Photo";
import config from "./config.json";

class App extends Component {
  state = { data: [] };

  async componentDidMount() {
    const { data } = await http.get(config.BASE_API_URL);
    this.setState({ data });
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/gallery/:id" component={Photo} />
          <Route
            path="/gallery"
            render={() => <Gallery data={this.state.data} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/gallery" />
          <Redirect to="/not-found" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
