import React, { Component } from "react";
import logo from "./img/logo.svg";
import "./App.css";
import VIPContainer from "./components/vipContainer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to V.I.P.</h1>
            <Link className="showlink" to="/fill-in-the-blank">
              Fill in the Blanks
            </Link>
          </header>
          <br />
          <br />
          <div className="App-body">
            <p>Vocabulary Improvement Program</p>
            <Route path="/fill-in-the-blank/" component={VIPContainer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
