import React, { Component } from "react";
import "./App.css";
import VIPContainer from "./components/vipContainer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to V.I.P.</h1>
            <h2 className="App-title">Vocabulary Improvement Program</h2>
            <Link className="showlink" to="/cards">
              Browse Cards
            </Link>
            <Link className="showlink" to="/fill-in-the-blank">
              Fill in the Blanks
            </Link>
          </header>
          <br />
          <br />
          <div className="App-body">
            <Route path="/cards/" component={VIPContainer} />
            <Route path="/fill-in-the-blank/" component={VIPContainer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
