import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aniket Gawali </span>
            from <span className="purple"> Amravati, Maharashtra.</span>
            <br /> I am an emerging  Frontend Developer Trainee at FunctionUp
            <br />
            Additionally, I am Paasonate about UI/UX Desining            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The small step taken can make a big differnece"{" "}
            <br/> 
            "Take your Chance"
          </p>
          <footer className="blockquote-footer">Aniket</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
