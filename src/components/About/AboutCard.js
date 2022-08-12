import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple"> Anvi Jain </span>
            from <span className="purple"> Indore, India.</span>
            <br />I am a junior pursuing B.Tech in Computer Science and
            Engineering. I aspire to a Full-Stack Engineer and I am willing to go on all the journeys on the way to acheiving my goal.
            <br />
            <br />
            Apart from coding,here some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Baking and making deserts
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Thrillers
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing the synthesizer
            </li>
          </ul>
          <p>I'm also into Anime and K-pop! </p>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anvi</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
