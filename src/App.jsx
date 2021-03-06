import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/sass/main.scss'
import Doctor from "./components/doctor/profile";
import Doctor2 from "./components/doctor/appointment";
import Auth from "./components/auth";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import User1 from "./components/user/profile";
import DemoIcon from "./demo/demoIcon";
import {} from "./assets/icons";

function App() {
  const [data, setData] = useState();
  // axios.get('http://localhost:3000/names').then(res => setData(res)).catch(res => res.response)
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#F1F1F1",
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
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
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
        <Link to="/DemoIcon">DemoIcon</Link>
        <Link to="/auth">Register</Link>
        <Switch>
          <Route path="/page1">
            <Doctor />
          </Route>
          <Route path="/page2">
            <Doctor2 />
          </Route>
          <Route path="/page3">
            <User1 />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/DemoIcon">
            <DemoIcon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
