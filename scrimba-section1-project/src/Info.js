import React from "react";

export default function Info() {
  return (
    <div>
      <div className="image">
        <img className="profile-pic" src="./profile.jpg" alt=""></img>
      </div>
      <header className="contact-details">
        <h3 className="name">James Wallington</h3>
        <h6 className="occupation">Frontend Developer</h6>
        <p className="website">jameswallington.ch</p>
      </header>

      <div className="buttons">
        <img className="email-button" src="email-button.png" alt=""></img>
        <img className="linkedin-button" src="linkedin-button.png" alt=""></img>
      </div>
    </div>
  );
}
