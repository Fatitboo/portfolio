import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nguyen Van Phat </span>
            from <span className="purple"> Ho Chi Minh, Viet Nam.</span>
            <br />
            I am a third-year student studying software engineering at the University of Information Technology. A person who is eager to learn and loves technology
            <br />
            I plan to graduate and receive a bachelor's degree in software engineering in 2025.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading book
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(90 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer" >Phat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
