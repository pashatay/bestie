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
        &ensp; Isn’t it lovely when someone calls you bestie?! I wouldn’t know
        because I’ve never been called so but, I’d imagine it feels like a warm
        hug.
        <br />
        <br />
        &ensp; What does it take to be the best bestie? It takes hard work and a
        good memory. Good memory? You ask. Yes. The greatest test to take you
        from basic to bestie is remembering your significant bestie’s birthday.
        It’s that simple!
        <img src={cake} className="cake" />
        <br />
        &ensp;Everyone knows it’s a no-no and a deserved permanent dunce cap to
        forget your friend’s special day.
        <br />
        <br />
        &ensp;Nowadays, we all have social media. It’s pretty handy when it
        comes to receiving notifications about your friends’ birthdays. But what
        if your friend removes that information or worse—they don’t have social
        media! Don’t fret you silly goose. We got you!
        <img src={socialmedia} className="socialmedia" />
        <img src={cake} className="cake2" />
        &ensp;Bestie app will send you an email reminding you to congratulate
        your friend on their birthday! All you have to do is add your friend’s
        information to your account.
        <br />
        <br />
        &ensp;Let's take a a quick tour. I want to show you everything. Click
        the arrow.
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
