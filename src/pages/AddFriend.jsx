import React, { useState, useContext } from "react";
import { Context } from "../Context";

function AddFriend() {
  const newFriendDefaultValues = {
    first_name: "",
    last_name: "",
    dob: "",
    relationship: "",
    profession: "",
    hobbies: "",
    cuisine: "",
    dessert: "",
    nonalc_beverage: "",
    alc_beverage: "",
    color: "",
    flowers: "",
    movies: "",
    books: "",
    tv_shows: "",
    music: "",
    sportgames: "",
    brands: "",
    humour: "",
    dreams: "",
    fears: "",
    chat_topics: "",
    no_topics: "",
    inspirations: "",
    other: ""
  };

  const { newFriend, setNewFriend } = useState(newFriendDefaultValues);

  const handleChange = e => {
    const target = e.target;
    setNewFriend(prevState => ({
      ...prevState,
      [target.name]: target.value.trim()
    }));
  };

  return (
    <div>
      <h1>Add a new Friend</h1>
      <form>
        <legend>First name:</legend>
        <input
          type="text"
          placeholder="First Name"
          name={"first_name"}
          onChange={handleChange}
        />
        <legend>Last name:</legend>
        <input
          type="text"
          placeholder="Last Name"
          name={"last_name"}
          onChange={handleChange}
        />
        <legend>Relationship:</legend>
        <input
          type="text"
          placeholder="relationship"
          name={"relationship"}
          onChange={handleChange}
        />
        <legend>Date of birth:</legend>
        <input
          type="date"
          placeholder="Date of Birth"
          name={"dob"}
          onChange={handleChange}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default AddFriend;
