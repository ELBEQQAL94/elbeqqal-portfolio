import React from "react";
import { Grid } from "semantic-ui-react";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// Components
import Item from "./Item";

const Content = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Item
            icon={faTachometerAlt}
            title="Fast"
            desc="Fast load times and lag free interaction, my highest priority."
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Item
            icon={faLaptop}
            title="Responsive"
            desc="My layouts will work on any device, big or small."
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Item
            icon={faGraduationCap}
            title="Learning"
            desc="I can learn any tech you want to integrate in your app, Or build your app with it."
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Content;
