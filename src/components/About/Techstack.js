import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiSass,
  DiCss3,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiSequelize,
  SiAngularjs,
  SiRedux,
  SiMaterialui,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p className="tech-icon-name">Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-icon-name">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-icon-name">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-icon-name">React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p className="tech-icon-name">Redux.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p className="tech-icon-name">Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSequelize />
        <p className="tech-icon-name">Sequelize</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
        <p className="tech-icon-name">Angular.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p className="tech-icon-name">Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-icon-name">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="tech-icon-name">Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <p className="tech-icon-name">SASS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <p className="tech-icon-name">Material UI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p className="tech-icon-name">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p className="tech-icon-name">Tailwind CSS</p>
      </Col>
    </Row>
  );
}

export default Techstack;
