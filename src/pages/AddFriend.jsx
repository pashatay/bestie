import React, { useState, useContext } from "react";
import { Context } from "../Context";
import axios from "axios";

import pig from "../images/pig.png";

function AddFriend() {
  const {
    headers,
    redirectToMainPage,
    setRedirectTask,
    getDataForUserMainPage
  } = useContext(Context);

  const newFriendDefaultValues = {
    first_name: "",
    last_name: "",
    dob: "",
    relationship: ""
  };
  const [newFriend, setNewFriend] = useState(newFriendDefaultValues);

  const handleChange = e => {
    const target = e.target;
    setNewFriend(prevState => ({
      ...prevState,
      [target.name]: target.value.trim()
    }));
  };

  const handleSubmitAddFriend = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/addfriend", newFriend, { headers })
      .then(getDataForUserMainPage())
      .then(setRedirectTask(true))
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <section className="add-new-friend">
      {redirectToMainPage()}
      <form onSubmit={handleSubmitAddFriend} className="add-new-friend-form">
        <h1 className="add-new-friend-title">Add a new Bestie</h1>
        <input
          required
          type="text"
          placeholder="First Name"
          name={"first_name"}
          onChange={handleChange}
        />

        <input
          required
          type="text"
          placeholder="Last Name"
          name={"last_name"}
          onChange={handleChange}
        />

        <input
          required
          type="text"
          placeholder="relationship"
          name={"relationship"}
          onChange={handleChange}
        />

        <input
          required
          type="date"
          placeholder="Date of Birth"
          name={"dob"}
          onChange={handleChange}
        />
        <input type="submit" className="button" value="Add Friend"></input>
      </form>
      <img src={pig} className="addfriend-img" />
    </section>
  );
}

export default AddFriend;
