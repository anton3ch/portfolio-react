import React from "react";
import { Typography } from "@mui/material";

const aboutMeText =
  `I’m an inquisitive Full Stack Software Engineer passionate about blending creativity, innovation, and cutting-edge technology to create impactful solutions. My diverse background fuels my curiosity, enabling me to continuously learn and approach problems strategically, both independently and collaboratively.

Driven by a fascination with Large Language Models (LLMs), I leverage AI-driven tools to streamline workflows, enhance productivity, and automate routine tasks, making development processes more efficient. I’m also passionate about augmented reality and its potential to transform user interactions.

As a freelance Software Engineer, I’ve delivered over 15 custom software solutions, consistently surpassing client expectations with a 100% satisfaction rate. My use of advanced technologies and efficient coding practices has reduced development times by 25%, improving overall software performance. My strong organizational skills ensure timely delivery, earning repeat business and top client ratings.

At PupPod, I spearheaded the development of a cross-platform game app for iOS, Android, and Web, optimizing performance and user experience, increasing our user base by 25% and boosting app ratings by 20%. Previously, at Business Solution Network, I led the transition of legacy web applications to modern React-based architectures, achieving a 50% reduction in load times and significantly improving user engagement.

Beyond software development, I enjoy creating custom HomeKit solutions, such as automating my water filtration system, and innovating smart home experiences using 3D modeling and printing. Outside of tech, I’m passionate about hiking, photography with my Canon 5D Mark IV, and continually expanding my skill set to remain at the forefront of software engineering.`.trim();

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
