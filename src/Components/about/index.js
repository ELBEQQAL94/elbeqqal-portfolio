import React from "react";
import { Container } from "semantic-ui-react";

// Components
import Content from "./Content";
import Title from '../ui/Title';

const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Title name="About"/>
        <Content />
      </Container>
    </div>
  );
};

export default About;
