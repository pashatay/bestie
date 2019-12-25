import React, { useContext } from "react";
import moment from "moment";

function DisplayFriend(data) {
  const element = data.data;
  //const keys = Object.keys(element);
  const dob = moment(element["dob"]).format("MMM Do YY");
  const years = moment().diff(element["dob"], "years");
  const friend = (
    <ul>
      <li>
        {element["first_name"]} {element["last_name"]}
      </li>
      <li>{element["relationship"]}</li>
      <li>{dob}</li>
      <li>{years} old</li>
    </ul>
  );

  return <div>{friend}</div>;
}

export default DisplayFriend;
