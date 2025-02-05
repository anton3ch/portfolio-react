import React from "react";
import mail from "./../img/mail.png";
import github from "./../img/github.png";
import instagram from "./../img/instagram.png";
import linkedin from "./../img/linkedin.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <div className="footer-icons">
        <a href="mailto:a@anton-ch.com" rel="noreferrer" target="_blank">
          <img src={mail} alt="Mail Icon" />
        </a>

        <a href="https://github.com/anton3ch" rel="noreferrer" target="_blank">
          <img src={github} alt="GitHub Icon" />
        </a>

        {/* 
        <a
          href="https://www.instagram.com/antony.chase/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="Instagram Icon" />
        </a> */}

        <a
          href="https://www.linkedin.com/in/anton3ch/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="LinkedIn Icon" />
        </a>
      </div>
      <div className="footer-text">
        © {currentYear} Copyright:{" "}
        <a
          href="https://www.linkedin.com/in/anton3ch/"
          rel="noreferrer"
          target="_blank"
          className="text-reset fw-bold"
        >
          Anton Ch
        </a>
      </div>
    </React.Fragment>
  );
}
