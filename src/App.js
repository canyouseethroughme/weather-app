import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import TheApp from "./pages/TheApp";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <Link to="/">Weather</Link>
            </ul>
            <ul>
              <Link to="/about">About</Link>
            </ul>
            <ul>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <TheApp />
            </Route>
            <Route path="/about" component={() => <About />}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
