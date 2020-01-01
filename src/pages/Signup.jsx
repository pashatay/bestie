import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

import signupImg from "../images/signup.png";

function Signup() {
  const {
    anError,
    setAnError,
    handleChange,
    handleSubmitSignUp,
    setConfirmedPassword
  } = useContext(Context);

  useEffect(() => {
    setAnError("");
  }, []);
  return (
    <div className="signup-form">
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
          placeholder="password"
          onChange={e => setConfirmedPassword(e.target.value)}
        />
        <br />
        <input type="submit" className="button" value="Sign Up"></input>
      </form>
      <h4 className="error">{anError}</h4>
      <img src={signupImg} className="signup-img" />
    </div>
  );
}

export default Signup;
