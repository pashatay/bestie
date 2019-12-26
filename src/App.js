import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "./Context";

import "./App.css";
import config from "./config";

import Header from "./components/Header";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddFriend from "./pages/AddFriend";
import LogOut from "./pages/LogOut";

function App() {
  const { userData } = useContext(Context);
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
        <Route path="/addfriend">
          <AddFriend />
        </Route>
        <Route path="/logout">
          <LogOut />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
