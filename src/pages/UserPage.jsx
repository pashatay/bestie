import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayFriend from "../components/DisplayFriend";

function UserPage() {
  const { userData, getDataForUserMainPage } = useContext(Context);
  console.log(userData);

  useEffect(() => {
    getDataForUserMainPage();
  }, []);

  const allUsersFriends = userData.map((friend, i) => {
    return <DisplayFriend data={friend} key={i} />;
  });

  return (
    <div>
      <h1>User page</h1>
      <Link to="/addfriend">
        <h3>Add</h3>
      </Link>
      {allUsersFriends}
    </div>
  );
}

export default UserPage;
