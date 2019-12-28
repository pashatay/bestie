import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import UserPage from "../components/UserPage";

function About() {
  const { userHasLoggedIn, setRedirectTask } = useContext(Context);

  useEffect(() => {
    setRedirectTask(false);
  }, []);

  return <div>{userHasLoggedIn ? <UserPage /> : <h1>About page</h1>}</div>;
}

export default About;
