import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Fitb from "./Fitb";
import cards from "./FlashcardList";
import card from "./Flashcard";


class VipContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/cards" exact component={cards} />
          <Route path="/cards/:id" exact component={card} />
          <Route path="/fill-in-the-blank" exact component={Fitb} />
        </Switch>
      </div>
    );
  }
}

export default VipContainer;
