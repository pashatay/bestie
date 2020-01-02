import React, { useEffect, useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import DisplayFriend from "./DisplayFriend";

function UserPage() {
  const { userData, getDataForUserMainPage, setRedirectTask } = useContext(
    Context
  );

  useEffect(() => {
    getDataForUserMainPage();
    setRedirectTask(false);
  }, []);

  const allUsersFriends = userData.map((friend, i) => {
    return <DisplayFriend data={friend} key={i} />;
  });

  return (
    <>
      <div className="wrapper">
        <Link to="/addfriend" className="add-friend-button">
          <h3 className="add-friend">
            <i className="ri-user-add-line"></i>
          </h3>
        </Link>
        <section className="all-besties">{allUsersFriends}</section>
      </div>
      <footer className="user-account-buttons">
        <Link to="/edituser">edit account</Link>
        <Link to="/deleteuser">delete account</Link>
      </footer>
    </>
  );
}

export default UserPage;
