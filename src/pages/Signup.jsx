import React, { useContext } from "react";
import { Context } from "../Context";

function Signup() {
  const {
    anError,
    handleChange,
    handleSubmitSignUp,
    setConfirmedPassword
  } = useContext(Context);

  return (
    <div>
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
          placeholder="re-enter password"
          onChange={e => setConfirmedPassword(e.target.value)}
        />
        <input type="submit"></input>
      </form>
      <h4>{anError}</h4>
    </div>
  );
}

export default Signup;
