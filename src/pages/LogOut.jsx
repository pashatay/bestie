import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import { Redirect } from "react-router-dom";

function LogOut() {
  const { setUserHasLoggedIn } = useContext(Context);
  useEffect(() => {
    localStorage.removeItem("access_token");
    setUserHasLoggedIn(false);
  });
  return <Redirect to="/" />;
}

export default LogOut;
