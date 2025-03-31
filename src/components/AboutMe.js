import React from "react";
import { Typography } from "@mui/material";

const aboutMeText =
  `I'm an inquisitive Full Stack Software Engineer who loves merging creativity, technology, and innovation to build meaningful solutions. My diverse experiences drive my curiosity and motivate me to continuously learn, explore new ideas, and tackle challenges both independently and collaboratively.

I'm particularly fascinated by Large Language Models (LLMs) and regularly use them to make my workflow smoother, automate everyday tasks, and boost productivity. Augmented reality is another area I'm passionate about; I believe it holds immense potential for enhancing productivity and efficiency in our daily lives.

As a freelance Software Engineer, I've delivered more than 15 custom software solutions, consistently going beyond client expectations and maintaining a 100% satisfaction rate. By utilizing modern technologies and efficient coding practices, I've reduced development time by 25% and significantly enhanced software performance. My ability to stay organized ensures I always meet deadlines, earning repeat business and excellent client feedback.

At PupPod, I led the development of a cross-platform game app for iOS, Android, and Web, optimizing performance and user experience, resulting in a 25% user base growth and a 20% improvement in app ratings. At Business Solution Network, I spearheaded the migration from legacy systems to modern React-based architectures, achieving a 50% reduction in page load times and notably boosting user engagement.

When I'm not coding, I enjoy tinkering with custom HomeKit solutions, like automating my water filter, and innovating my smart home setup through 3D modeling and printing. Outside tech, I love traveling, hiking, scuba diving, photographing wildlife and nature with my Canon 5D Mark IV—all activities that inspire my creativity and help me maintain a balanced and fulfilling lifestyle.`.trim();

export default function AboutMe() {
  const paragraphs = aboutMeText.split("\n\n");

  return (
    <div className="about animate__animated animate__headShake mx-3">
      <h2 className="sectionTitle">ABOUT</h2>
      <div className="card cardAbout">
        <div className="card-body aboutText">
          <Typography variant="body1" className="" component="div">
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
