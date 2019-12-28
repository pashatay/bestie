import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayFriend from "./DisplayFriend";

function UserPage() {
  const {
    userData,
    headers,
    getDataForUserMainPage,
    redirectTask,
    setRedirectTask,
    redirectToMainPage,
    setUserHasLoggedIn
  } = useContext(Context);

  console.log(userData);
  console.log(redirectTask);
  useEffect(() => {
    getDataForUserMainPage();
    setRedirectTask(false);
  }, []);

  const allUsersFriends = userData.map((friend, i) => {
    return <DisplayFriend data={friend} key={i} />;
  });

  return (
    <div>
      <Link to="/addfriend" className="add-friend-button">
        <h3 className="add-friend">
          <i className="ri-user-add-line"></i>
        </h3>
      </Link>
      {allUsersFriends}
      <footer className="user-account-buttons">
        <Link to="/edituser">edit account</Link>
        <Link to="/deleteuser">delete account</Link>
      </footer>
    </div>
  );
}

export default UserPage;
