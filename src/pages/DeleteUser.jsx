import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import axios from "axios";

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
      .then(redirectToMainPage())
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>
        Are you sure you want to delete your page? If you will press yes, all
        data will be deleted without an option to restore it!
      </p>
      <button onClick={handleDeleteAccount}>Yes</button>
      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
}

export default DeleteUser;
