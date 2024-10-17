import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Iconarrow from "./Iconarrow";


const Home = () => {
  return (
    <div>
      <Iconarrow/>
      <Header/>
      <Intro/>
      <About/>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
