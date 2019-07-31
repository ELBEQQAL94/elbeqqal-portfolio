import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Flip from "react-reveal";

const Items = () => (
  <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Flip left>
            <div className="profile" />
          </Flip>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Flip right>
            <div className="profil_desc">
              <h4>Who I am ?</h4>
              <p>
                I Am a Front-End Developer over than 2 years, I worked at
                company name is
                <a href="https://www.econostic.com/">ECONOSTIC</a>
                in post Front-End Reactjs Developer. Now i'm a freelancer.
              </p>

              <h4>Skills</h4>

              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>

              <h4>Framework</h4>

              <span>Reactjs</span>
              <span>ReactNative</span>
              <span>Vuejs</span>
              <span>Sveltejs</span>

              <h4>Server Side</h4>

              <span>Nodejs</span>
              <span>Expressjs</span>
              <span>GraphQL</span>
              <span>Firebase</span>
            </div>
          </Flip>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Items;
