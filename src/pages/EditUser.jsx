import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const {
    anError,
    handleChange,
    handleSubmitChangeEmail,
    handleSubmitChangePassword,
    setConfirmedPassword
  } = useContext(Context);

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmitChangeEmail}>
        <legend>Change Email:</legend>
        <input
          required
          type="email"
          placeholder="email"
          name={"email"}
          onChange={handleChange}
        />
        <input type="submit" className="button"></input>
      </form>
      <form onSubmit={handleSubmitChangePassword}>
        <legend>Change Password:</legend>
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

export default EditUser;
