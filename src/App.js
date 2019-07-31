import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

// Components
import Header from "./Components/header";
import About from "./Components/about";
import Topbar from "./Components/topbar";
import Footer from "./Components/footer";
import Projects from "./Components/projects";
import Skills from "./Components/skills";

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
