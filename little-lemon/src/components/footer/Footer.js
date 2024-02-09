import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.footer}>
          <div className={style.footer_content}>
            <div>
              <h1>Little Lemon</h1>
              <p>Chicago</p>
              <p>1234 W. Chicago Ave, Chicago, IL 60622</p>
              <p>312-123-4567</p>
            </div>
            <div>
              <h2>Hours</h2>
              <p>Monday - Friday: 11:00am - 10:00pm</p>
              <p>Saturday: 11:00am - 11:00pm</p>
              <p>Sunday: 11:00am - 9:00pm</p>
            </div>
            <div>
              <h2>Follow Us</h2>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
