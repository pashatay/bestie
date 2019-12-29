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
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {redirectToMainPage()}
      <p>
        Are you sure you want to delete your page? If you press yes, all your
        information will be erased permanently.
      </p>
      <button onClick={handleDeleteAccount}>Yes</button>
      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
}

export default DeleteUser;
