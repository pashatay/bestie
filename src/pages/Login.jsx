import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import { Redirect } from "react-router-dom";

import cake from "../images/cake.png";

function Login() {
  const {
    anError,
    setAnError,
    handleSubmitLogin,
    handleChange,
    redirectToMainPage
  } = useContext(Context);

  useEffect(() => {
    setAnError("");
  }, []);

  return (
    <div className="login-form">
      {redirectToMainPage()}
      <form onSubmit={handleSubmitLogin}>
        <input
          required
          type="text"
          placeholder="email"
          name={"email"}
          onChange={handleChange}
        />

        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
          onChange={handleChange}
        />
        <input type="submit" className="button" value="Log In"></input>
      </form>
      <h4 className="error">{anError}</h4>
      <img src={cake} className="login-img" />
    </div>
  );
}

export default Login;
