import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kanBanProject from "../../Assets/Projects/kanbanProject.png";
import twitterProject from "../../Assets/Projects/twitterProject.jpeg";

import learningSite from "../../Assets/Projects/learningSite.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitterProject}
              isBlog={false}
              title="Twitter Clone"
              description="A complete of twitter.com where you can create a new account, login with valid credentials and acess your account.The home page of user works with an api.Make your followers there and post the things and content of your choice"
              ghLink="https://github.com/PARTHAKMEHRA/Twitter_Clone.git"
              demoLink="https://twitter-clone-c9x6pjqhs-parthakmehra.vercel.app/signin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanBanProject}
              isBlog={false}
              title="KanBan Board"
              description="A Kanban board is a visual project management tool that helps teams visualize and track their work.You can drag and drop the tasks from one list to another.The components are dynamically routed so that it is easy to acess. "
              ghLink="https://github.com/szakeerfu/kanban-project"
              demoLink="https://thisiskanbanprojects.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learningSite}
              isBlog={false}
              title="Online Learning Site"
              description="The project works with the Bootsrtrap to make the Ui more atrractive.React slick is used with react icons.Complete Ui with all the sections like an eccommerce site."
              ghLink="https://github.com/Aniket-oo7/React-Edu-Tech-Site.git"
              demoLink="https://deft-kitsune-398803.netlify.app/"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
