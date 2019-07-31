import React from "react";
import Flip from "react-reveal";

// Components
import Title from '../ui/Title';
import Items from './Items';

const Skills = () => (
  <div className="skills" id="skills">
    <Flip left>
      <Title name="Skills" />
    </Flip>

    <Items />

  </div>
);

export default Skills;
