import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { userHasLoggedIn } = useContext(Context);
  const notLogged = (
    <header>
      <Link to="/">
        <h1>Bestie</h1>
      </Link>
      <Link to="/login">
        <h2>Login</h2>
      </Link>
      <Link to="/signup">
        <h2>Sign Up</h2>
      </Link>
    </header>
  );
  const logged = (
    <header>
      <Link to="/">
        <h1>Bestie</h1>
      </Link>
      <Link to="/logout">
        <h2>Log Out</h2>
      </Link>
    </header>
  );
  return <>{userHasLoggedIn ? logged : notLogged}</>;
}

export default Header;
