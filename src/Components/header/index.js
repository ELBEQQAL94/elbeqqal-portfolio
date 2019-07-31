import React from "react";
import { Container } from "semantic-ui-react";

// Components
import Menubar from "./Menubar";

const Header = () => {
  return (
    <header>
      <Container>
        <Menubar />
      </Container>
    </header>
  );
};

export default Header;
