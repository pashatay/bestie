import React from "react";

import hug from "../images/hug.png";
import cake from "../images/cake.png";
import socialmedia from "../images/socialmedia3.png";
import friends from "../images/friends.png";

function Info() {
  return (
    <div>
      <p className="app-info">
        Isn’t it lovely when someone calls you bestie?! I wouldn’t know because
        I’ve never been called so but, I’d imagine it feels like a warm hug.
        <img src={hug} />
        What does it take to be the best bestie? It takes hard work and a good
        memory. Good memory? You ask. Yes. The greatest test to take you from
        basic to bestie is remembering your significant bestie’s birthday. It’s
        that simple!
        <img src={cake} />
        Everyone knows it’s a no-no and a deserved permanent dunce cap to forget
        your friend’s special day. Nowadays, we all have social media. It’s
        pretty handy when it comes to receiving notifications about your
        friends’ birthdays. But what if your friend removes that information or
        worse—they don’t have social media! Don’t fret you silly goose. We got
        you!
        <img src={socialmedia} />
        Bestie app will send you an email reminding you to congratulate your
        friend on their birthday! All you have to do is to add your friend’s
        information to your account. You can add as many friends as you want.
        <img src={friends} />
        You can always review the list of friends you have, add new ones, or
        delete fake friends. If you change your email, simply update your
        account in the app.
      </p>

      <a href="https://www.linkedin.com/in/pashatay/" className="builtby">
        buit by Pasha Tay
      </a>
    </div>
  );
}

export default Info;