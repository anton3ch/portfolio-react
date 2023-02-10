import React from 'react';
import mePhoto from './../img/tony.png';

function Intro() {
  return (
  <div className="jumbotron p-2 ps-0 pb-0 intro mx-3" id="intro">
      <div>
        <h1 className="intro">Hey</h1>
        <h2 className="intro-name">I'm <a href="https://github.com/anton3ch" target="_blank" id="myName" rel="noreferrer">Anton</a></h2>
        <h2 className="intro" id="intro2">Full-Stack Software Engineer</h2>
      </div>
      <div className="mePhotoContainer"><img id="mePhoto" src={mePhoto} alt="me" /></div>
    </div>
  )
}

export default Intro;