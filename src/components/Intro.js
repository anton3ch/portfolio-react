import React, { useRef, useState, useEffect } from "react";
import "./Styles/introStyles.css"; // Your existing intro styles
import FrothyBackground from "./FrothyBackground";
import { Container } from "@mui/material";

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
// Add this array at the top of your component file (e.g., right after the imports)
const calligraphyFonts = [
  "'Dancing Script', cursive",
  "'Great Vibes', cursive",
  "'Parisienne', cursive",
  "'Pacifico', cursive",
  "'Satisfy', cursive",
  "'Alex Brush', cursive",
  "'Allura', cursive",
  "'Yellowtail', cursive",
  "'Rouge Script', cursive",
  "'Amatic SC', cursive",
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
  const outerBoxRef = useRef(null);
  const [outerBoxHeight, setOuterBoxHeight] = useState(0);

  useEffect(() => {
    if (outerBoxRef.current) {
      setOuterBoxHeight(outerBoxRef.current.clientHeight);
    }
  }, []);

  return (
    <div className="outerBox" ref={outerBoxRef}>
      <div
        className="outerBoxLeftBlur"
        style={{ height: outerBoxHeight }}
      ></div>
      <Container
        className="jumbotron intro"
        id="intro"
        // style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Insert the frothy floating rectangle as a background overlay */}
        <FrothyBackground />

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
      </Container>
      <div
        className="outerBoxRightBlur"
        style={{ height: outerBoxHeight }}
      ></div>
      <div className="bubbles">
        {skills.map((skill, index) => {
          const randomFont =
            calligraphyFonts[getRandomPosition(calligraphyFonts.length)];
          return (
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
                fontFamily: calligraphyFonts[index % calligraphyFonts.length],
                // Optionally, you can also add a font-style: italic for some fonts if desired:
                // fontStyle: Math.random() > 0.5 ? "italic" : "normal",
              }}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Intro;
