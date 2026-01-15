import React from "react";
import Project from "./Project";
import { v4 } from "uuid";

import interplanetaryAgeImg from "./../img/galactic-age.webp";

import languageSuggesterImg from "./../img/suggester.webp";

import neighborhoodImg from "./../img/neighbor.webp";

import currencyAgeImg from "./../img/currency.webp";

import rpgAgeImg from "./../img/rpg.webp";

import notemeImg from "./../img/noteme.png";

import taskWaveImg from "./../img/TaskWave.png";

import quackWashImg from "./../img/quackwash.webp";

import casaFiestaImg from "./../img/casafiesta.webp";

function ProjectList() {
  return (
    <React.Fragment>
      <div className="projectContainer">
        <h2 className="sectionTitle">PROJECTS</h2>
        {/* <hr className="mx-3" /> */}
        <div className="projectList">
          {mainProjectList.map((project) => (
            <Project
              deployedLink={project.deployedLink}
              projectName={project.projectName}
              key={v4()}
              img={project.img}
              imgAlt={project.imgAlt}
              description={project.description}
              gitRepo={project.gitRepo}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

const mainProjectList = [
  {
    deployedLink: "https://casafiesta.netlify.app",
    projectName: "Casa Fiesta Restaurant",
    img: casaFiestaImg,
    imgAlt: "Casa Fiesta Restaurant website screenshot",
    description:
      "A modern, responsive restaurant website for Casa Fiesta, featuring authentic Mexican cuisine. Built with Next.js, TypeScript, and Tailwind CSS, the site includes smooth animations with Framer Motion, dark/light theme toggle, interactive gallery, team showcase, menu display, and contact forms with map integration. The design emphasizes warm Mexican aesthetics with chili pepper color schemes and professional typography.",
    gitRepo: "",
    technologies: [
      {
        name: "Next.js",
        link: "https://nextjs.org",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com",
      },
      {
        name: "Framer Motion",
        link: "https://www.framer.com/motion/",
      },
      {
        name: "React",
        link: "https://reactjs.org",
      },
      {
        name: "Google Maps API",
        link: "https://developers.google.com/maps",
      },

    ],
  },
  {
    deployedLink: "",
    projectName: "AI TaskWave",
    img: taskWaveImg,
    imgAlt: "Note Me App screenshot",
    description:
      "An iOS app designed with SwiftUI, leveraging advanced large language models (LLMs) to enhance productivity and task management. It generates content for emails, social media posts, reviews, and free-form entries using customizable templates sorted by frequency of use. The app supports voice input, history management, powerful search functionality, dark mode, and iCloud integration for seamless synchronization across devices. AI TaskWave integrates OpenAI’s ChatGPT model to streamline workflows and boost productivity.",
    gitRepo: "",
    technologies: [
      {
        name: "SwiftUI",
        link: "https://developer.apple.com/xcode/swiftui/",
      },
      {
        name: "SwiftData",
        link: "https://developer.apple.com/documentation/swiftdata",
      },
      {
        name: "Swift",
        link: "https://swift.org",
      },
      {
        name: "ChatGPT",
        link: "https://openai.com/chatgpt",
      },
      {
        name: "RESTful APIs",
        link: "https://restfulapi.net",
      },
    ],
  },
  {
    deployedLink: "https://quackwash1.netlify.app/",
    projectName: "QuackWash",
    img: quackWashImg,
    imgAlt: "QuackWash web app screenshot",
    description:
      "Quack Wash is a responsive web application designed for a window cleaning service. The app includes animations and interactive elements to enhance user experience. The design uses the brand colors and incorporates a dark mode for better accessibility and user comfort.",
    gitRepo: "",
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org",
      },
      {
        name: "Material-UI",
        link: "https://mui.com",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org",
      },
      {
        name: "Framer Motion",
        link: "https://www.framer.com/motion/",
      },
    ],
  },
  {
    deployedLink: "https://github.com/anton3ch/Note-Me-App",
    projectName: "Note Me",
    img: notemeImg,
    imgAlt: "Note Me App screenshot",
    description:
      "A React Native application designed for efficient note-taking. It allows users to create, organize, and manage their notes with ease. The app features a clean and intuitive interface, providing functionalities such as adding new notes, editing existing ones, and categorizing notes for better organization.",
    gitRepo: "",
    technologies: [
      {
        name: "React Native",
        link: "https://reactnative.dev",
      },
      {
        name: "Redux",
        link: "https://redux.js.org",
      },
      {
        name: "React Navigation",
        link: "https://reactnavigation.org",
      },
      {
        name: "Expo",
        link: "https://expo.dev",
      },
    ],
  },
  // {
  //   deployedLink: "https://anton3ch.github.io/galactic-age/",
  //   projectName: "Interplanetary Age",
  //   img: interplanetaryAgeImg,
  //   imgAlt: "Interplanetary Age app screenshot",
  //   description:
  //     "The applications calculates what would user's age be on different planets based on solar years.",
  //   gitRepo: "https://github.com/anton3ch/galactic-age/",
  //   technologies: [
  //     {
  //       name: "HTML",
  //       link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  //     },
  //     {
  //       name: "CSS",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  //     },
  //     {
  //       name: "JavaScript",
  //       link: "https://www.javascript.com",
  //     },
  //     {
  //       name: "Webpack",
  //       link: "https://webpack.js.org",
  //     },
  //   ],
  // },
  // {
  //   deployedLink: "https://anton3ch.github.io/neighbor/",
  //   projectName: "Neighborhood",
  //   img: neighborhoodImg,
  //   imgAlt: "Neighborhood app screenshot",
  //   description:
  //     "A robust neighborhood application that takes a user input and generates a range of numbers from 0 to the provided value with seamless substitutions. Implemented Jest unit testing for reliability and bug-free user experience.",
  //   gitRepo: "",
  //   technologies: [
  //     {
  //       name: "HTML",
  //       link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  //     },
  //     {
  //       name: "CSS",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  //     },
  //     {
  //       name: "JavaScript",
  //       link: "https://www.javascript.com",
  //     },
  //   ],
  // },
  // {
  //   deployedLink: "https://anton3ch.github.io/language-suggester/",
  //   projectName: "Language Suggester",
  //   img: languageSuggesterImg,
  //   imgAlt: "Language Suggester app screenshot",
  //   description:
  //     "The website presents a Programming Language Suggester quiz where the result changes based on the user input.",
  //   gitRepo: "https://github.com/anton3ch/language-suggester/",
  //   technologies: [
  //     {
  //       name: "HTML",
  //       link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  //     },
  //     {
  //       name: "CSS",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  //     },
  //     {
  //       name: "JavaScript",
  //       link: "https://www.javascript.com",
  //     },
  //   ],
  // },
  // {
  //   deployedLink: "https://anton3ch.github.io/currency-exchange",
  //   projectName: "Currency Exchange",
  //   img: currencyAgeImg,
  //   imgAlt: "Currency Exchanger app screenshot",
  //   description:
  //     "Currency Exchanger queries ExchangeRate-API to convert currency between all available currency types. A user can type in an amount and then choose which currency it should be converted from and to.",
  //   gitRepo: "https://github.com/anton3ch/currency-exchange",
  //   technologies: [
  //     {
  //       name: "HTML",
  //       link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  //     },
  //     {
  //       name: "CSS",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  //     },
  //     {
  //       name: "JavaScript",
  //       link: "https://www.javascript.com",
  //     },
  //     {
  //       name: "Webpack",
  //       link: "https://webpack.js.org",
  //     },
  //     {
  //       name: "ExchangeRate-API",
  //       link: "https://www.exchangerate-api.com",
  //     },
  //   ],
  // },
  // {
  //   deployedLink: "https://anton3ch.github.io/slayer-rpg/",
  //   projectName: "The Bug Slayer",
  //   img: rpgAgeImg,
  //   imgAlt: "The Bug Slayer app screenshot",
  //   description:
  //     "Point-and-click game in which the player must use nothing but their mouse to find clues in order to complete the quest.",
  //   gitRepo: "https://github.com/anton3ch/slayer-rpg/",
  //   technologies: [
  //     {
  //       name: "HTML",
  //       link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  //     },
  //     {
  //       name: "CSS",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  //     },
  //     {
  //       name: "JavaScript",
  //       link: "https://www.javascript.com",
  //     },
  //     {
  //       name: "Webpack",
  //       link: "https://webpack.js.org",
  //     },
  //   ],
  // },
  ,
];

// const newProjectList = [
//   {
//     deployedLink: "https://anton3ch.github.io/slayer-rpg/",
//     projectName: "The Bug Slayer",
//     img: rpgAgeImg,
//     imgAlt: "The Bug Slayer app screenshot",
//     description:
//       "Point-and-click game in which the player must use nothing but their mouse to find clues in order to complete the quest.",
//     gitRepo: "https://github.com/anton3ch/slayer-rpg/",
//     technologies: [
//       {
//         name: "HTML",
//         link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
//       },
//       {
//         name: "CSS",
//         link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//       },
//       {
//         name: "JavaScript",
//         link: "https://www.javascript.com",
//       },
//       {
//         name: "Webpack",
//         link: "https://webpack.js.org",
//       },
//     ],
//   },
//   {
//     deployedLink: "",
//     projectName: "",
//     img: "",
//     imgAlt: "Interplanetary Age app screenshot",
//     description: "",
//     gitRepo: "",
//     technologies: [
//       {
//         name: "HTML",
//         link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
//       },
//       {
//         name: "CSS",
//         link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//       },
//       {
//         name: "JavaScript",
//         link: "https://www.javascript.com",
//       },
//       {
//         name: "Webpack",
//         link: "https://webpack.js.org",
//       },
//     ],
//   },
//   {
//     deployedLink: "",
//     projectName: "",
//     img: "",
//     imgAlt: "Interplanetary Age app screenshot",
//     description: "",
//     gitRepo: "",
//     technologies: [
//       {
//         name: "HTML",
//         link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
//       },
//       {
//         name: "CSS",
//         link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//       },
//       {
//         name: "JavaScript",
//         link: "https://www.javascript.com",
//       },
//       {
//         name: "Webpack",
//         link: "https://webpack.js.org",
//       },
//     ],
//   },
// ];

export default ProjectList;
