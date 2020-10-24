import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import DemoCard from './demo/demoCard'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  // axios.get('http://localhost:3000/names').then(res => setData(res)).catch(res => res.response)
  return (
    <div className="App" style={{ backgroundColor: "#F1F1F1" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Router>
        <Link to="/card">Card Demo</Link>
        <Switch>
          <Route path="/card">
            <DemoCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
