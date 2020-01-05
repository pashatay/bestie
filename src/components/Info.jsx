import React from "react";
import { Link } from "react-router-dom";

import hug from "../images/hug.png";
import cake from "../images/cake.png";
import socialmedia from "../images/socialmedia3.png";
import friends from "../images/friends.png";
import arrow from "../images/arrow.png";

function Info() {
  return (
    <section>
      <p className="app-info">
        <img src={hug} className="hug" />
        &ensp;Bestie App will send you an email reminding you to congratulate
        your friend on their birthday! All you have to do is add your friend’s
        information to your account.
        <br />
        <br />
        &ensp;Let's take a quick tour. I want to show you everything. Click the
        arrow.
        <br />
        <br />
        <Link to="/tour">
          <img src={arrow} className="arrow" />
        </Link>
      </p>

      <a href="https://www.linkedin.com/in/pashatay/" className="builtby">
        built by Pasha Tay
      </a>
    </section>
  );
}

export default Info;
