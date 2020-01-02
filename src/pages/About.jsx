import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import UserPage from "../components/UserPage";
import Info from "../components/Info";

function About() {
  const { userHasLoggedIn, setRedirectTask } = useContext(Context);

  useEffect(() => {
    setRedirectTask(false);
  }, []);

  return <>{userHasLoggedIn ? <UserPage /> : <Info />}</>;
}

export default About;
