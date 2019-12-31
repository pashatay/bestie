import React from "react";

import hug from "../images/hug.png";
import cake2 from "../images/cake2.png";
import cake from "../images/cake.png";
import socialmedia from "../images/socialmedia3.png";
import friends from "../images/friends.png";

function Info() {
  return (
    <div>
      <p className="app-info">
        Isn’t it lovely when someone calls you bestie?! I wouldn’t know because
        I’ve never been called so but, I’d imagine it feels like a warm hug.
        <div className="app-info-img">
          <img src={hug} />
        </div>
        What does it take to be the best bestie? It takes hard work and a good
        memory. Good memory? You ask. Yes. The greatest test to take you from
        basic to bestie is remembering your significant bestie’s birthday. It’s
        that simple!
        <div className="app-info-img">
          <img src={cake2} />
        </div>
        Everyone knows it’s a no-no and a deserved permanent dunce cap to forget
        your friend’s special day. Nowadays, we all have social media. It’s
        pretty handy when it comes to receiving notifications about your
        friends’ birthdays. But what if your friend removes that information or
        worse—they don’t have social media! Don’t fret you silly goose. We got
        you!
        <div className="app-info-img">
          <img src={socialmedia} />
        </div>
        Bestie app will send you an email reminding you to congratulate your
        friend on their birthday! All you have to do is to add your friend’s
        information to your account. You can add as many friends as you want.
        <div className="app-info-img">
          <img src={friends} />
        </div>
        You can always review the list of friends you have, add new ones, or
        delete fake friends. If you change your email, simply update your
        account in the app.
      </p>
      <span>Buit by Pasha Tay</span>
    </div>
  );
}

export default Info;
