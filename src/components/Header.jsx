import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { userHasLoggedIn } = useContext(Context);

  const notLogged = (
    <>
      <Link to="/" className="header-bestie">
        <h2>Best!e</h2>
      </Link>
      <div>
        <Link to="/login" className="header-logLinks">
          <h2>Login</h2>
        </Link>
        <Link to="/signup" className="header-logLinks">
          <h2>SignUp</h2>
        </Link>
      </div>
    </>
  );

  const logged = (
    <>
      <Link to="/" className="header-bestie">
        <h2>Best!e</h2>
      </Link>
      <Link to="/logout" className="header-logOut">
        <h2>Log Out</h2>
      </Link>
    </>
  );

  return (
    <header className="header">{userHasLoggedIn ? logged : notLogged}</header>
  );
}

export default Header;
