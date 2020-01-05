import React from "react";
import { Link } from "react-router-dom";

import hug from "../images/hug.png";
import arrow from "../images/arrow.png";

function Info() {
  return (
    <section>
      <div className="app-info-div">
        <img src={hug} className="hug" />
        <p className="app-info">
          Bestie App will remind you about your friends' birthdays!
          <br />
          <br />
          Let's take a quick tour. I want to show you everything. Click the
          arrow.
        </p>
      </div>
      <Link to="/tour">
        <img src={arrow} className="arrow" />
      </Link>

      <a href="https://www.linkedin.com/in/pashatay/" className="builtby">
        built by Pasha Tay
      </a>
    </section>
  );
}

export default Info;
