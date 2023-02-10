import SidePanel from'./SidePanel.js';
import AboutMe from'./AboutMe.js';
import ProjectList from'./ProjectList.js';
import Intro from'./Intro.js';
import React from 'react';
import Footer from './Footer';



function App() {
  return (
    <div className="container pb-1">
      <SidePanel />
      <Intro />
      <ProjectList />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
