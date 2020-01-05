import React from "react";
import { Link } from "react-router-dom";

import hug from "../images/hug.png";
import arrow from "../images/arrow.png";

function Info() {
  return (
    <section>
      <img src={hug} className="hug" />
      <p className="app-info">
        &ensp;Bestie App will send you an email reminding you to congratulate
        your friend on their birthday!
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
