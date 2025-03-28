import React, { useState, useEffect } from "react";
import "./Background.css"; // Ensure this file is imported

// Helper functions for color conversion and brightness computation
function hexToHSL(hex) {
  hex = hex.replace(/^#/, "");
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.padStart(2, "0");
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function computeBrightness(hex) {
  hex = hex.replace(/^#/, "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
}

function generateClusteredColors() {
  const randomColor = () =>
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  // Determine system theme and set a target brightness
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  // For dark mode, use a lower lightness (darker colors); for light mode, use a higher lightness
  const targetLightness = isDarkMode ? 30 : 70;

  // Generate a random color and adjust its brightness to the target
  const firstColorRandom = randomColor();
  const firstHSL = hexToHSL(firstColorRandom);
  firstHSL.l = targetLightness;
  const firstColor = hslToHex(firstHSL.h, firstHSL.s, firstHSL.l);

  const colors = [firstColor];

  for (let i = 1; i < 8; i++) {
    // Generate a random hue across the full spectrum
    let newHue = Math.random() * 360;
    // Vary saturation slightly around the first color's saturation
    let newSat = Math.min(
      100,
      Math.max(0, firstHSL.s + (Math.random() * 20 - 10))
    );
    // Use the same target brightness for all colors
    let newLight = targetLightness;
    const newColor = hslToHex(newHue, newSat, newLight);
    colors.push(newColor);
  }
  return colors;
}

function Background() {
  const [colors, setColors] = useState(generateClusteredColors());

  // Listen for theme changes and update colors accordingly
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = () => {
      setColors(generateClusteredColors());
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleThemeChange);
    } else {
      mediaQuery.addListener(handleThemeChange);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleThemeChange);
      } else {
        mediaQuery.removeListener(handleThemeChange);
      }
    };
  }, []);

  // Adjust the global font color based on brightness.
  useEffect(() => {
    const brightness = computeBrightness(colors[0]);
    // If the first color is bright, use black fonts; otherwise use white.
    const fontColor = brightness > 128 ? "black" : "white";
    document.documentElement.style.setProperty("--font-color", fontColor);
  }, [colors]);

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
