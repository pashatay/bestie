import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import devices from "../images/readme-images/demo-devices.png";
import verification from "../images/readme-images/demo-verification.png";
import addfriend from "../images/readme-images/demo-addfriend.png";
import deletefriend from "../images/readme-images/demo-deletefriend.png";
import reminder from "../images/readme-images/demo-reminder.png";
import edit from "../images/readme-images/demo-edit.png";
import verification2 from "../images/readme-images/demo-verification2.png";
import deletepage from "../images/readme-images/demo-delete.png";

function Tour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="app-tour">
      <img src={devices} className="demo-image" />
      The Bestie App is compatible with any device. In order to start using it
      you need to sign up for an account first. As soon as you sign up, "Bestie"
      will email you a verification link.
      <img src={verification} className="demo-image" />
      Click the link and you're all set! Now you can start using the app. After
      you login, you will be redirected to the main page where you can find the
      "add friend" button.
      <span className="add-friend-demo-button">
        <i className="ri-user-add-line"></i>
      </span>
      <span className="intro"> Go ahead and add your friend’s info:</span>
      <br />
      <ul>
        <li> - First name</li>
        <li> - Last name</li>
        <li> - Relationship</li>
        <li> - Date of birth</li>
      </ul>
      <img src={addfriend} className="demo-image" />
      To get back to your page click on the Best!e logo. Each of your friends
      will get their own circle. If you're using a mobile device and you want to
      delete a friend, tap on the circle and click delete. If you’re using a
      laptop, hover over a friend and click delete.
      <img src={deletefriend} className="demo-image" />
      When one of your friends has a birthday, "Bestie" will email you a
      reminder.
      <img src={reminder} className="demo-image" />
      Make sure you update "Bestie" if your email changes. You can update your
      email or password by clicking on the “edit account" button from the main
      page.
      <img src={edit} className="demo-image" />
      For each email update, "Bestie" will email you a verification link to make
      sure we got it right.
      <img src={verification2} className="demo-image" />
      If you ever want to delete your account, click the "delete account" button
      from the main page.
      <img src={deletepage} className="demo-image" />
      Before deleting your account, "Bestie" will verify this is the correct
      course of action you want to take. If you press "Yes" your data will be
      erased permanently.
      <br />
      <br />
      <div>
        Excited to start using the app? Click the <bt />
        <Link to="/signup" className="signup-tourpage">
          signup.
        </Link>
      </div>
    </section>
  );
}

export default Tour;
