import SidePanel from "./SidePanel.js";
import AboutMe from "./AboutMe.js";
import ProjectList from "./ProjectList.js";
import Intro from "./Intro.js";
import React from "react";
import Footer from "./Footer";
import ContactMeSection from "./ContactMeSection";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="outer-box">
      <div className="container pb-1">
        <Helmet>
          <title>Anton Ch</title>
        </Helmet>
        <Intro />
        <ProjectList />
        <AboutMe />
        <ContactMeSection />
        <SidePanel />

        <Footer />
      </div>
    </div>
  );
}

export default App;
