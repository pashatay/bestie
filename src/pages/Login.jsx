import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

import loginImg from "../images/login.png";

function Login() {
  const {
    anError,
    setAnError,
    aMessage,
    setAMessage,
    handleSubmitLogin,
    handleChange,
    redirectToMainPage
  } = useContext(Context);

  useEffect(() => {
    setAMessage("");
    setAnError("");
  }, []);

  return (
    <section className="login-form">
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
      <h4 className="message">{aMessage}</h4>

      <img src={loginImg} className="login-img" />
    </section>
  );
}

export default Login;
