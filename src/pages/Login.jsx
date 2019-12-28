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
    <div className="login-form">
      {redirectToMainPage()}
      <form onSubmit={handleSubmitLogin}>
        <legend>Email:</legend>
        <input
          required
          type="text"
          placeholder="email"
          name={"email"}
          onChange={handleChange}
        />
        <legend>Password:</legend>
        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
          onChange={handleChange}
        />
        <input type="submit" className="button"></input>
      </form>
      <h4 className="error">{anError}</h4>
    </div>
  );
}

export default Login;
