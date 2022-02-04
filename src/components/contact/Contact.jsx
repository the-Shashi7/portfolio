import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="social">
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/shashi-bhushan-4301a3208/" target="_blank">
              <img className="icons linkedin" src="icons/linkedin-brands.svg"/>
            </a>
            <a href="https://github.com/the-Shashi7/the-Shashi7" target="_blank" >
              <img className="icons" src="icons/GitHub-Logo.wine.svg"/>
            </a>
            <a href="https://www.instagram.com/the_shashi7/" target="_blank">
              <img className="icons" src="icons/Instagram-Logo.wine.svg"/>
            </a>
            <a href="https://leetcode.com/the_shashi7/" target="_blank">
              <img className="icons leetcode" src="icons/leetcode.svg"/>
            </a>
          </div>
          <div className="mainContact">
          <a type="email"><br/>
              <span>Gmail : mahto71997@gmail.com </span>
            </a><br/>
            <a type="tel">
              <span>Mobile : +91 9990473318</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
