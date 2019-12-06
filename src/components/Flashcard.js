import React, { Component } from "react";
import back_muscle_img from "../data/img/back_muscle.jpeg";
import leg_muscle_img from "../data/img/leg_muscle.jpeg";
// const path = require('path');
// path.dirname('/foo/bar/baz/asdf/quux')
const data = require("../data");
const cards = data.flashcards;

let currentcard;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    };
  }
  componentWillMount() {
    this.getCard();
  }
  getCard() {
    let cid = this.props.match.params.id;
    let ak;
    let i;
    for(i=0; i < cards.length; i++){
      if(cards[i].id === Number(cid)){
        ak=cards[i].answerkey;
        currentcard=cards[i].cardname;
        break;
      }
    }
    this.setState({
      data: ak
    });
  }
//   getimg(i){
//       return images.filter(({id, src, title, description}) => id=i)[0];
//   }
  render() {
    let body = null;
    let currp;
    currentcard = currentcard + "_img";
    if (currentcard === "back_muscle_img") {
      currp = back_muscle_img;
    } else if (currentcard === "leg_muscle_img") {
      currp = leg_muscle_img;
    }
    let img = <img alt="fitb_img" src={currp} />;
    // let img = <img alt="fitb_img" src={this.getimg(cid).src} />;
    let lst = [];
    let label;
    for(label = 1; label <= this.state.data.length; label++){
        lst.push(<b key={'b'+label}>({label}): {this.state.data[label-1].answer}</b>, 
          <br key={'br'+label} />)
    }
    body = (
      <div>
        {img}
        <br/>
        {lst}
      </div>
    );
    return body;
  }
}

export default Card;
