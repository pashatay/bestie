import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

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
        <legend>Your name:</legend>
        <input
          required
          type="text"
          placeholder="name"
          name={"name"}
          onChange={handleChange}
        />
        <legend>Email:</legend>
        <input
          required
          type="email"
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
        <legend>Re-enter password:</legend>
        <input
          required
          type="password"
          placeholder="password"
          onChange={e => setConfirmedPassword(e.target.value)}
        />
        <br />
        <input type="submit" className="button"></input>
      </form>
      <h4 className="error">{anError}</h4>
    </div>
  );
}

export default Signup;
