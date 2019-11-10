import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Fitb from "./Fitb";


class PokemonContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/fill-in-the-blank" exact component={Fitb} />
        </Switch>
      </div>
    );
  }
}

export default PokemonContainer;
