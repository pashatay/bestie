import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

import signupImg from "../images/signup.png";

function Signup() {
  const {
    anError,
    setAnError,
    aMessage,
    setAMessage,
    handleChange,
    handleSubmitSignUp,
    setConfirmedPassword
  } = useContext(Context);

  useEffect(() => {
    setAnError("");
    setAMessage("");
  }, []);
  return (
    <section className="signup-form">
      <form onSubmit={handleSubmitSignUp}>
        <input
          required
          type="text"
          placeholder="name"
          name={"name"}
          onChange={handleChange}
        />

        <input
          required
          type="email"
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

        <input
          required
          type="password"
          placeholder="confirm password"
          onChange={e => setConfirmedPassword(e.target.value)}
        />
        <br />
        <input type="submit" className="button" value="Sign Up"></input>
      </form>
      <h4 className="error">{anError}</h4>
      <h4 className="message">{aMessage}</h4>
      <img src={signupImg} className="signup-img" />
    </section>
  );
}

export default Signup;
