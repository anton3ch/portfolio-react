// Background.js
import React, { useMemo } from "react";
import "./Background.css"; // Ensure this file is imported

function Background() {
  // Generate an array of 8 random hex colors.
  const colors = useMemo(() => {
    const randomColor = () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    // Create an array with 8 random colors.
    return Array.from({ length: 8 }, randomColor);
  }, []);

  // Construct a multi-stop gradient string using 8 colors.
  const gradient = `linear-gradient(45deg, ${colors.join(", ")})`;

  return (
    <div
      className="animated-background"
      style={{ backgroundImage: gradient }}
    />
  );
}

export default Background;
