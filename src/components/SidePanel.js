import React from 'react';
import mail from "./../img/mail.png";
import github from "./../img/github.png";
import instagram from "./../img/instagram.png";
import linkedin from "./../img/linkedin.png";


function SidePanel() {
  return (
    <nav>
      <div id="icons">
        <ul>
          <li>
            <a href="mailto:a@anton-ch.com" rel="noreferrer" target="_blank">
              <img src={mail} alt="Mail Icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/anton3ch" rel="noreferrer" target="_blank">
              <img src={github} alt="GitHub Icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/antony.chase/" rel="noreferrer" target="_blank">
              <img src={instagram} alt="Instagram Icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anton3ch/" rel="noreferrer" target="_blank">
              <img src={linkedin} alt="LinkedIn Icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SidePanel;