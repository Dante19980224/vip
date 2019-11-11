import React, { Component } from "react";
import { Link } from "react-router-dom";
const cards = require("../data");

class FlashcardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: cards.flashcards
    };
  }
//   componentDidMount() {
//     this.getCards();
//   }
//   getCards() {
//     try {
//       console.log(cards);
//       const response = cards.flashcards;
//       this.setState({ data: response });
//     } catch (e) {
//       console.log(e);
//     }
//   }
  render() {
    let body = null;
    let li = null;
    li =
      this.state.data.map(card => (
        <li key={card.id}>
          <Link to={`/cards/${card.id}`}>{card.cardname}</Link>
        </li>
      ));
    body = (
      <div>
        <b>Flashcards</b>
        <ul className="list-unstyled">{li}</ul>
      </div>
    );

    return body;
  }
}

export default FlashcardList;
