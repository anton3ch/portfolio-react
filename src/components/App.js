import SidePanel from "./SidePanel.js";
import AboutMe from "./AboutMe.js";
import ProjectList from "./ProjectList.js";
import Intro from "./Intro.js";
import React from "react";
import Footer from "./Footer";
import ContactMeSection from "./ContactMeSection";
import { Helmet } from "react-helmet";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <div className="outer-box">
      <div className="container pb-1">
        <CssBaseline />
        {/* <Helmet>0 */}
        <title>Anton Ch</title>
        {/* </Helmet> */}
        <Intro />
        <Container>
          <ProjectList />
          <AboutMe />
          <ContactMeSection />
          <SidePanel />
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default App;
