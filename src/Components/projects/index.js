import React from "react";
import { Grid, Container } from "semantic-ui-react";
import Flip from "react-reveal";

// Images
import NetflixApp from "../../images/projects/netflix-app.png";
import Bicycle from "../../images/projects/Bicycle.png";
import NetflixVideo from "../../images/projects/netflix_video.png";

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
                bg="https://i.postimg.cc/dQmkd758/Screenshot-2020-02-09-React-App-1.png"
                previewLink="https://sad-perlman-2199f0.netlify.com"
                githubLink="https://github.com/ELBEQQAL94/frontend-code-challenge"
              />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Project
                bg={NetflixVideo}
                previewLink="https://objective-hypatia-db4f19.netlify.com/"
                githubLink="https://github.com/ELBEQQAL94/recreate_netflix_video_player"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Flip>
    </Container>
  </div>
);

export default Projects;
