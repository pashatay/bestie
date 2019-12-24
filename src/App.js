import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "./Context";

import "./App.css";
import config from "./config";

import Header from "./components/Header";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserPage from "./pages/UserPage";

function App() {
  const { loggedUserValues } = useContext(Context);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/login">
          {loggedUserValues.token.length > 1 ? (
            <Redirect to="{`/${loggedUserValues.id}`}" />
          ) : (
            false
          )}
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/:userid">
          <UserPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
