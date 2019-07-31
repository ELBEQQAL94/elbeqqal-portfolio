import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link, animateScroll as scroll } from "react-scroll";

const Menubar = () => {
  const [activeItem, setActiveitem] = useState("");

  const handleItemClick = (e, { name }) => setActiveitem(name);

  return (
    <Menu stackable size="massive">
      <Menu.Item>ELBEQQAL</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="About"
          active={activeItem === "About"}
          onClick={handleItemClick}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </Menu.Item>

        <Menu.Item
          name="Skills"
          active={activeItem === "Skills"}
          onClick={handleItemClick}
        >
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </Menu.Item>

        <Menu.Item
          name="Projects"
          active={activeItem === "Projects"}
          onClick={handleItemClick}
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Menubar;
