import React, { useState, useContext } from "react";
import { Context } from "../Context";
import axios from "axios";

function AddFriend() {
  const {
    headers,
    redirectToMainPage,
    redirectTask,
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
    console.log(redirectTask);
    axios
      .post("http://localhost:8000/addfriend", newFriend, { headers })
      .then(res => {
        console.log(res);
      })
      .then(getDataForUserMainPage())
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add a new Bestie</h1>
      {redirectToMainPage()}
      <form onSubmit={handleSubmitAddFriend}>
        <legend>First name:</legend>
        <input
          required
          type="text"
          placeholder="First Name"
          name={"first_name"}
          onChange={handleChange}
        />
        <legend>Last name:</legend>
        <input
          required
          type="text"
          placeholder="Last Name"
          name={"last_name"}
          onChange={handleChange}
        />
        <legend>Relationship:</legend>
        <input
          required
          type="text"
          placeholder="relationship"
          name={"relationship"}
          onChange={handleChange}
        />
        <legend>Date of birth:</legend>
        <input
          required
          type="date"
          placeholder="Date of Birth"
          name={"dob"}
          onChange={handleChange}
        />
        <input type="submit" className="button"></input>
      </form>
    </div>
  );
}

export default AddFriend;
