import React from "react";
import { Grid, Container } from "semantic-ui-react";
import Flip from "react-reveal";
import Title from "../../Components/ui/Title";

const Projects = () => (
  <div className="projects" id="projects">
    <Title name="Projects" />
    <Container>
      <Flip right>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="project_item" />
              <div className="project_view">
                <button>
                  <a href="#">preview</a>
                </button>
                <button>
                  <a hre="#">github</a>
                </button>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="project_item" />
              <div className="project_view">
                <button>
                  <a href="#">preview</a>
                </button>
                <button>
                  <a hre="#">github</a>
                </button>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="project_item" />
              <div className="project_view">
                <button>
                  <a href="#">preview</a>
                </button>
                <button>
                  <a hre="#">github</a>
                </button>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="project_item" />
              <div className="project_view">
                <button>
                  <a href="#">preview</a>
                </button>
                <button>
                  <a hre="#">github</a>
                </button>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="project_item" />
              <div className="project_view">
                <button>
                  <a href="#">preview</a>
                </button>
                <button>
                  <a hre="#">github</a>
                </button>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="project_item" />
              <div className="project_view">
                <button>
                  <a href="#">preview</a>
                </button>
                <button>
                  <a hre="#">github</a>
                </button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Flip>
    </Container>
  </div>
);

export default Projects;
