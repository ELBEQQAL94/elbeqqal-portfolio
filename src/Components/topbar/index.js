import React from "react";
import Roll from "react-reveal/Roll";
import { Link, animateScroll as scroll } from "react-scroll";

// Components
import Particles from "./Particles";

const Topbar = () => {
  return (
    <div className="topbar topbar-md">
      <Particles />

      <Roll left duration={500}>
        <p>
          Hello, I'm <span>ELBEQQAL YOUSSEF</span>{" "}
        </p>
      </Roll>
      <Roll left duration={1000}>
        {" "}
        <p>I'm Front-End Web Developer.</p>
      </Roll>
      <Roll right duration={1500}>
        {" "}
        <button>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            view my work
          </Link>
        </button>
      </Roll>
    </div>
  );
};

export default Topbar;
