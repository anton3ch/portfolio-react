import React from "react";
import { Typography } from "@mui/material";

const aboutMeText =
  `I’m an inquisitive Software Engineer driven by a passion for blending creativity, technology, and innovation. My diverse background and curiosity fuel my continuous learning and problem-solving approach. I thrive on tackling challenges independently and as part of a team, always aiming to push boundaries and deliver high-quality solutions.

As a freelance Software Engineer, I delivered over 15 custom software solutions, consistently exceeding client expectations with a 100% satisfaction rate. I utilized advanced technologies to reduce development time by 25% and enhance software performance. My strong organizational and time management skills allowed me to consistently meet project deadlines, earning 5-star ratings and repeat business.

Previously, I contributed to PupPod, where I led the development of a cross-platform game app for iOS, Android, and Web. By optimizing the app for various devices, I successfully increased our user base by 25% and improved app ratings by 20%. My role involved designing an intricate game progression system featuring multiple levels, badges, and escalating challenges. Additionally, I enhanced the app’s visual appeal by creating and refining image and GIF assets.

At Business Solution Network, I spearheaded the migration of a legacy web application to a modern React-based architecture. This transformation resulted in a 50% reduction in page load times and a 40% increase in user engagement. I also designed and implemented dynamic employee onboarding processes using JavaScript and CSS animations, significantly boosting engagement. My focus on responsive design principles led to a 20% increase in mobile traffic, ensuring a consistent user experience across all devices.

In my free time, I enjoy hiking, capturing moments with my Canon 5D Mark IV, and creating smart home devices through 3D modeling and printing. I am dedicated to self-improvement, constantly seeking new knowledge and skills to stay ahead in the ever-evolving field of software engineering.`.trim();

export default function AboutMe() {
  const paragraphs = aboutMeText.split("\n\n");

  return (
    <div className="about animate__animated animate__headShake mx-3">
      <h2 className="sectionTitle">ABOUT</h2>
      <div className="card cardAbout">
        <div className="card-body aboutText">
          <Typography variant="body1" className="text-justify" component="div">
            {paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  marginTop: idx === 0 ? "0" : undefined,
                  marginBottom: idx === paragraphs.length - 1 ? "0" : undefined,
                }}
              >
                {paragraph}
              </p>
            ))}
          </Typography>
        </div>
      </div>
    </div>
  );
}
