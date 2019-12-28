import React, { useContext, useState } from "react";
import { Context } from "../Context";
import moment from "moment";
import axios from "axios";

function DisplayFriend(data) {
  const {
    headers,
    setUserData,
    setRedirectTask,
    redirectToMainPage
  } = useContext(Context);

  const [hovered, setHovered] = useState(false);

  const element = data.data;
  const dob = moment(element["dob"]).format("MMM Do YY");
  const years = moment().diff(element["dob"], "years");
  const friendId = element.id;

  const friend = (
    <ul className="bestie">
      <li>
        {element["first_name"]} {element["last_name"]}
      </li>
      <li>{element["relationship"]}</li>
      <li>{dob}</li>
      <li>{years} old</li>
    </ul>
  );

  const handleDeleteFriend = e => {
    axios
      .delete(
        "http://localhost:8000/usersfriend",
        { body: { friendId } },
        { headers }
      )
      .then(res => {
        console.log(res);
      })
      .then(setRedirectTask(true))
      .then(redirectToMainPage())
      .catch(err => {
        console.log(err);
      });
    console.log(friendId);
  };
  const deleteIcon = hovered && (
    <i class="ri-close-circle-fill" onClick={() => handleDeleteFriend()}></i>
  );
  const editIcon = hovered && <i class="ri-settings-3-fill"></i>;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {friend}
      {editIcon}
      {deleteIcon}
    </div>
  );
}

export default DisplayFriend;
