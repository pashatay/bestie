import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

import signupImg from "../images/signup.png";
import cake from "../images/cake.png";

function Signup() {
  const {
    anError,
    setAnError,
    aMessage,
    setAMessage,
    handleChange,
    handleSubmitSignUp,
    setConfirmedPassword,
    wasAbleToSignUp,
    setWasAbleToSignUp,
    disableInput,
    setDisableInput
  } = useContext(Context);

  useEffect(() => {
    setAnError("");
    setAMessage("");
    setWasAbleToSignUp(false);
    setDisableInput(false);
  }, []);

  const message = (
    <>
      <h4 className="message signup-message">{aMessage}</h4>{" "}
      <img src={cake} className="signup-img-cake" />
    </>
  );
  const signForm = (
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
        <input
          type="submit"
          disabled={disableInput}
          className="button"
          value="Sign Up"
        ></input>
      </form>
      <h4 className="error">{anError}</h4>
      <img src={signupImg} className="signup-img" />
    </section>
  );
  return <> {wasAbleToSignUp ? message : signForm}</>;
}

export default Signup;
