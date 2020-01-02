import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddFriend from "./pages/AddFriend";
import LogOut from "./pages/LogOut";
import DeleteUser from "./pages/DeleteUser";
import EditUser from "./pages/EditUser";

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
        <Route path="/addfriend">
          <AddFriend />
        </Route>
        <Route path="/logout">
          <LogOut />
        </Route>
        <Route path="/deleteuser">
          <DeleteUser />
        </Route>
        <Route path="/edituser">
          <EditUser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
