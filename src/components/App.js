// App.js
import React from "react";
import SidePanel from "./SidePanel.js";
import AboutMe from "./AboutMe.js";
import ProjectList from "./ProjectList.js";
import Intro from "./Intro.js";
import Footer from "./Footer";
import ContactMeSection from "./ContactMeSection";
import { Helmet } from "react-helmet";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Background from "./Background"; // Import our background component

function App() {
  return (
    <>
      {/* Render the animated background */}

      <div>
        <div>
          <CssBaseline />
          <Background />
          {/* <Helmet>
              <title>Anton Ch</title>
            </Helmet> */}
          <title>Anton Ch</title>
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
    </>
  );
}

export default App;
