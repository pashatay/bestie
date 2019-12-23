import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
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
}

export default Header;
