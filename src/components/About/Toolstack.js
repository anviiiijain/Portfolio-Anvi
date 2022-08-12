import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiFigma,
  SiNetlify,
  SiAdobexd,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p className="tech-icon-name">Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-icon-name">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-icon-name">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
        <p className="tech-icon-name">Adobe XD</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p className="tech-icon-name">Netlify</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
