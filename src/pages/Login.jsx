import React, { useState, useContext } from "react";
import { Context } from "../Context";

function Login() {
  const { anError, handleSubmitLogin, handleChange } = useContext(Context);

  return (
    <div>
      <form onSubmit={handleSubmitLogin}>
        <input
          type="text"
          placeholder="email"
          name={"email"}
          onChange={handleChange}
        />
        <input
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
