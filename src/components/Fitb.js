import React, { Component } from "react";
// import noImage from "../img/download.jpeg";
import back_muscle_img from "../data/Fitb/img/back_muscle_fitb.jpeg"
const data = require("../data");
const back_muscleData = data.back_muscle;

class Fitb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: undefined,
      inputlst: [],
      currid: undefined
    };
  }
  componentWillMount() {
    this.getPart();
    console.log('init inputlist: ', this.state.inputlst);
  }
//   as for now this will only get back_muscle. In the future, could add more flashcards or whatnot and randomly select one
  getPart() {
    this.setState({
        answer: back_muscleData
    });
  }
  // replc(lst, i, nv){
  //   let x = lst;
  //   x[i] = nv;
  //   return x;
  // }
  handleSubmit(event){
    event.preventDefault();
    console.log('this.state is: ', this.state);
    let rightanswer = this.state.answer;
    let myanswer = this.state.inputlst;
    console.log("myasnwer is :", myanswer);
    let i;
    let score = 0;
    for(i in rightanswer){
      try {
        if(myanswer[i].toLowerCase() === rightanswer[i].answer.toLowerCase()){
          score = score+1;
        }
      } catch (e) {
        // console.log(e);
      }
    }
    alert("hi, the score is: " + score + "/" + rightanswer.length);
  }
  handleChange(e){
    // e.persist();
    let nl = this.state.inputlst;
    nl[e.target.id-1] = e.target.value;
    this.setState({
      inputlst: nl
    })
    console.log('after change: ', this.state.inputlst);
  }
  render() {
    let body = null;
    let img = <img alt="fitb_img" src={back_muscle_img} />;
    let lst = [];
    let label;
    for(label = 1; label <= this.state.answer.length; label++){
        // lst.push(<b>({label}): </b>,<input type="text" name={'l'+label} placeholder="enter here" />, <br/>)
        console.log("label is: ", label);
        lst.push(<b key={'b'+label}>({label}): </b>,<input type="text" key={label} id={label} name={label} value={this.state.inputlst[label-1]} onChange={
          // ( e => 
          //   this.setState({
          //     inputlst: this.replc(this.state.inputlst, (label-1), e.target.value)
          //   }, () => {
          //     console.log('label '+label+': ',e.target);
          //   })
          // )
          this.handleChange.bind(this)
        } placeholder="enter here" />, <br key={'br'+label} />)
    }
    body = (
      <div>
        <h3 className="cap-first-letter">
          Back Muscles
        </h3>
            {img}
        <br />
        <br />
        <b>
            Fill in the blanks as labeled in the picture.
        </b>
        <form onSubmit={this.handleSubmit.bind(this)}>
            {lst}
            <input type="submit" value="Submit" />
        </form> 
      </div>
    );
    return body;
  }
}

export default Fitb;
