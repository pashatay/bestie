import React, { useContext } from "react";
import { Context } from "../Context";
import UserPage from "../components/UserPage";

function About() {
  const { userHasLoggedIn } = useContext(Context);
  return <div>{userHasLoggedIn ? <UserPage /> : <h1>About page</h1>}</div>;
}

export default About;
