import React from "react";
import "./Styles/introStyles.css"; // Make sure to import the CSS file

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Swift",
  "SwiftUI",
  "Python",
  "C#",
  "ASP.NET MVC",
  "SQL",
  "MySQL",
  "HTML",
  "CSS",
  "SASS",
  "jQuery",
  "Redux",
  "Bootstrap",
  "Tailwind",
  "MUI",
  "React Native",
  "Jest",
  "JSON",
  "REST APIs",
  "GraphQL",
  "TDD",
  "CLI",
  "Git",
  "AWS",
  "Figma",
  "Sketch",
  "Adobe Photoshop",
  "Adobe Lightroom",
];

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function getAnimationDuration() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return 10; // Smaller screens
  } else if (screenWidth < 1200) {
    return 15; // Medium screens
  } else {
    return 20; // Larger screens
  }
}

function Intro() {
  return (
    <div className="jumbotron p-2 ps-0 pb-0 intro mx-3" id="intro">
      <div className="innerIntro">
        <h1 className="introHey">Hey</h1>
        <div className="intro-name">
          <h2 className="intro-name">I'm</h2>
          <h2 className="intro-name">
            <a
              href="https://www.linkedin.com/in/anton3ch/"
              target="_blank"
              id="myName"
              rel="noreferrer"
            >
              Anton
            </a>
          </h2>
        </div>
        <h2 id="intro2">Full-Stack Software Engineer</h2>
      </div>
      <div className="bubbles">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bubble ${
              index % 2 === 0 ? "float-right" : "float-left"
            }`}
            style={{
              top: `${(90 / skills.length) * index}%`,
              animationDelay: `${getRandomPosition(10)}s`,
              animationDuration: `${
                getAnimationDuration() +
                getRandomPosition(getAnimationDuration())
              }s`,
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
