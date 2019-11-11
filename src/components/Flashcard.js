import React, { Component } from "react";
import back_muscle_img from "../data/img/back_muscle.jpeg";
// const path = require('path');
// path.dirname('/foo/bar/baz/asdf/quux')
const data = require("../data");
const cards = data.flashcards;

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
    let img = <img alt="fitb_img" src={back_muscle_img} />;
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
