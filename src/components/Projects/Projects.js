import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import muniversiti from "../../Assets/Projects/muniversiti.png"
import InternNET from "../../Assets/Projects/InternNET.png"
import medicsy from "../../Assets/Projects/medicsy.png"
import ev from "../../Assets/Projects/ev.png"
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ev}
              isWork={true}
              title="EventEngage"
              description=""
              link="https://eventengage.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muniversiti}
              isWork={true}
              title="Muniversiti"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isWork={true}
              title="Digital Projekt"
              description=""
              link="https://www.muniversiti.org/"
            />
          </Col>
</Row>
<Container fluid className="project-section">
<h1 className="project-heading">
          <strong className="purple">Projects </strong>I've worked on recently.
        </h1>
<Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="E-commerce"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InternNET}
              title="InternNET"
              description=""
              link="internnet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicsy}
              title="Medicsy"
              description=""
              link=""
            />
          </Col>
        </Row>
</Container>
      </Container>
    </Container>
  );
}

export default Projects;
