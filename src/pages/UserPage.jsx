import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import axios from "axios";

function UserPage() {
  const [userData, setUserData] = useState([]);
  const headers = {
    Authorization: localStorage.getItem("access_token")
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/mainpage", { headers })
      .then(res => {
        //setData is not working
        setUserData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>User page</h1>
    </div>
  );
}

export default UserPage;
