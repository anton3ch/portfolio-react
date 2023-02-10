import SidePanel from'./SidePanel.js';
import AboutMe from'./AboutMe.js';
import ProjectList from'./ProjectList.js';
import Intro from'./Intro.js';
import React from 'react';
import Footer from './Footer';
import { Helmet } from 'react-helmet';



function App() {
  return (
    <div className="outer-box">
    <div className="container pb-1">
      <Helmet>
        <title>Anton Ch</title>
      </Helmet>
      <SidePanel />
      <Intro />
      <ProjectList />
      <AboutMe />
      <Footer />
    </div>
    </div>
  );
}

export default App;
