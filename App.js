import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Practice/Login";
import Coin from "./Practice/Coin";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/coininfo" component={Coin} />
      </div>
    </Router>
  );
}

export default App;
