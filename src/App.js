import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import config from "./config";

import Header from "./components/Header";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
