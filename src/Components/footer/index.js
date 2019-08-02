import React from "react";
import { Container } from "semantic-ui-react";
import { ScGithub } from "styled-icons/evil/ScGithub";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { ScTwitter } from "styled-icons/evil/ScTwitter";

const Footer = () => (
  <footer>
    <Container>
      <div className="footer_item">
        <div className="email">
          <span>ELBEQQAL.youssef@gmail.com</span>
        </div>
        <div className="copy_right">
          <span>ELBEQQAL&copy; 2019</span>
        </div>
      </div>
      <div className="icons">
        <a href="https://github.com/ELBEQQAL94" target="_blank">
          {" "}
          <ScGithub size="48" />
        </a>
        
        <a href="https://twitter.com/YBeqqal" target="_blank">
          {" "}
          <ScTwitter size="48" />
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
