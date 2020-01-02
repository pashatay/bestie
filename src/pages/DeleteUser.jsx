import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import axios from "axios";

import deleteImg from "../images/delete.png";

function DeleteUser() {
  const {
    headers,
    setUserHasLoggedIn,
    setRedirectTask,
    redirectToMainPage
  } = useContext(Context);

  const handleDeleteAccount = e => {
    e.preventDefault();
    axios
      .delete("http://localhost:8000/mainpage", { headers })
      .then(setUserHasLoggedIn(false))
      .then(setRedirectTask(true))
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="delete-section">
        <div>
          {redirectToMainPage()}
          <p className="delete-info">
            Are you sure you want to delete your page? If you press yes all your
            information will be erased permanently.
          </p>
          <button onClick={handleDeleteAccount} className="delete-info-button">
            Yes
          </button>
          <Link to="/">
            <button className="delete-info-button">No</button>
          </Link>
        </div>
        <img src={deleteImg} className="delete-img" />
      </section>
    </>
  );
}

export default DeleteUser;
