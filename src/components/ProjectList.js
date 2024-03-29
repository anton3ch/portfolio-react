import React from "react";
import Project from "./Project";
import { v4 } from "uuid";

import interplanetaryAgeImg from "./../img/galactic-age.webp";
import interplanetaryAgeImgGit from "./../img/git-cover3.jpg";

import languageSuggesterImg from "./../img/suggester.webp";
import languageSuggesterImgGit from "./../img/git-cover2.jpg";

import neighborhoodImg from "./../img/neighbor.webp";
import neighborhoodImgGit from "./../img/git-cover1.png";

import currencyAgeImg from "./../img/currency.webp";
import currencyAgeImgGit from "./../img/git-cover4.jpg";

import rpgAgeImg from "./../img/rpg.webp";
import rpgAgeImgGit from "./../img/git-cover5.png";

import notemeImg from "./../img/noteme2.png";
import notemeImgGit from "./../img/git-cover7.webp";

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
              imgGit={project.imgGit}
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
    deployedLink: "https://github.com/anton3ch/Note-Me-App",
    projectName: "Note Me App",
    img: notemeImg,
    imgAlt: "Note Me App screenshot",
    imgGit: notemeImgGit,
    description: "A note app that lets users schedule Note Reminders.",
    gitRepo: "https://github.com/anton3ch/Note-Me-App",
    technologies: [
      {
        name: "React Native",
        link: "https://reactnative.dev",
      },
    ],
  },
  {
    deployedLink: "https://anton3ch.github.io/galactic-age/",
    projectName: "Interplanetary Age",
    img: interplanetaryAgeImg,
    imgAlt: "Interplanetary Age app screenshot",
    imgGit: interplanetaryAgeImgGit,
    description:
      "The applications calculates what would user's age be on different planets based on solar years.",
    gitRepo: "https://github.com/anton3ch/galactic-age/",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        link: "https://www.javascript.com",
      },
      {
        name: "Webpack",
        link: "https://webpack.js.org",
      },
    ],
  },
  {
    deployedLink: "https://anton3ch.github.io/neighbor/",
    projectName: "Neighborhood",
    img: neighborhoodImg,
    imgAlt: "Neighborhood app screenshot",
    imgGit: neighborhoodImgGit,
    description:
      "Neighborhood application takes a number from a user and returns a range of numbers from 0 to the user inputted number with substitutions: 'Beep,' 'Boop,' and 'Won't you be my neighbor?' instead of 1, 2, and 3 respectively.",
    gitRepo: "",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        link: "https://www.javascript.com",
      },
    ],
  },
  {
    deployedLink: "https://anton3ch.github.io/language-suggester/",
    projectName: "Language Suggester",
    img: languageSuggesterImg,
    imgAlt: "Language Suggester app screenshot",
    imgGit: languageSuggesterImgGit,
    description:
      "The website presents a Programming Language Suggester quiz where the result changes based on the user input.",
    gitRepo: "https://github.com/anton3ch/language-suggester/",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        link: "https://www.javascript.com",
      },
    ],
  },
  {
    deployedLink: "https://anton3ch.github.io/currency-exchange",
    projectName: "Currency Exchange",
    img: currencyAgeImg,
    imgAlt: "Currency Exchanger app screenshot",
    imgGit: currencyAgeImgGit,
    description:
      "Currency Exchanger queries ExchangeRate-API to convert currency between all available currency types. A user can type in an amount and then choose which currency it should be converted from and to.",
    gitRepo: "https://github.com/anton3ch/currency-exchange",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        link: "https://www.javascript.com",
      },
      {
        name: "Webpack",
        link: "https://webpack.js.org",
      },
      {
        name: "ExchangeRate-API",
        link: "https://www.exchangerate-api.com",
      },
    ],
  },
  {
    deployedLink: "https://anton3ch.github.io/slayer-rpg/",
    projectName: "The Bug Slayer",
    img: rpgAgeImg,
    imgAlt: "The Bug Slayer app screenshot",
    imgGit: rpgAgeImgGit,
    description:
      "Point-and-click game in which the player must use nothing but their mouse to find clues in order to complete the quest.",
    gitRepo: "https://github.com/anton3ch/slayer-rpg/",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        link: "https://www.javascript.com",
      },
      {
        name: "Webpack",
        link: "https://webpack.js.org",
      },
    ],
  },
];

// const newProjectList = [
//   {
//     deployedLink: "https://anton3ch.github.io/slayer-rpg/",
//     projectName: "The Bug Slayer",
//     img: rpgAgeImg,
//     imgAlt: "The Bug Slayer app screenshot",
//     imgGit: rpgAgeImgGit,
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
//     imgGit: "",
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
//     imgGit: "",
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
