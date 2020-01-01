import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import moment from "moment";
import axios from "axios";

function DisplayFriend(data) {
  const {
    headers,
    getDataForUserMainPage,
    redirectTask,
    setRedirectTask
  } = useContext(Context);

  const [hovered, setHovered] = useState(false);
  const element = data.data;

  const dob = moment(element["dob"]).format("MMM Do YY");
  const years = moment().diff(element["dob"], "years");
  const friendId = element.id;

  const friend = (
    <div className="bestie">
      <ul>
        <li>
          {element["first_name"]} {element["last_name"]}
        </li>
        <li>{element["relationship"]}</li>
        <li>{dob}</li>
        <li>{years} y.o.</li>
      </ul>
    </div>
  );

  const handleDeleteFriend = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/usersfriend/${friendId}`, { headers })
      .then(setRedirectTask(true))
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataForUserMainPage();
    setRedirectTask(false);
  }, [redirectTask]);

  const deleteIcon = hovered && (
    <i className="ri-close-circle-fill" onClick={handleDeleteFriend}></i>
  );

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bestie-box"
    >
      {friend}
      {deleteIcon}
    </div>
  );
}

export default DisplayFriend;
