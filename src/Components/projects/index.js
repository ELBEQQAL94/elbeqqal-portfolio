import React from "react";
import { Grid, Container } from "semantic-ui-react";
import Flip from "react-reveal";

// Images
import NetflixApp from "../../images/projects/netflix-app.png";
import Bicycle from "../../images/projects/Bicycle.png";

// Components
import Title from "../../Components/ui/Title";
import Project from "./Project";

const Projects = () => (
  <div className="projects" id="projects">
    <Title name="Projects" />
    <Container>
      <Flip right>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Project
                bg={NetflixApp}
                previewLink="https://musing-feynman-c9514b.netlify.com/"
                githubLink="https://github.com/ELBEQQAL94/netflix-app"
              />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Project
                bg={Bicycle}
                previewLink="https://heuristic-mirzakhani-a269db.netlify.com/"
                githubLink="https://github.com/ELBEQQAL94/wearecuppa-"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Flip>
    </Container>
  </div>
);

export default Projects;
