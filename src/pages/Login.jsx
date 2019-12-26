import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import { Redirect } from "react-router-dom";

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
    <div>
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
        <input type="submit"></input>
      </form>
      <h4>{anError}</h4>
    </div>
  );
}

export default Login;
