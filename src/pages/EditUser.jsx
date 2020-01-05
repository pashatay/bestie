import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

function EditUser() {
  const {
    anError,
    setAnError,
    handleChange,
    handleSubmitChangeEmail,
    handleSubmitChangePassword,
    setConfirmedPassword
  } = useContext(Context);

  useEffect(() => {
    setAnError("");
  }, []);

  return (
    <>
      <section className="edit-form">
        <form onSubmit={handleSubmitChangeEmail}>
          <input
            required
            type="email"
            placeholder="email"
            name={"email"}
            onChange={handleChange}
          />
          <input type="submit" className="button" value="Change Email"></input>
        </form>
        <br />
        <h4 className="error">{anError}</h4>
        <form onSubmit={handleSubmitChangePassword}>
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
          <input
            type="submit"
            className="button"
            value="Change Password"
          ></input>
        </form>
      </section>
    </>
  );
}

export default EditUser;
