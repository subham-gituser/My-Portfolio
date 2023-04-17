import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const Aboutcard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Subham Gouda </span>
            from <span className="purple"> Berhampur, India.</span>
            <br />I m a BSC Mathematics Student
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Browsing coding websites and A.I Tools 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech and gadgets videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }} className="purple">
          "Experience is the name everyone gives to their mistakes"{" "}
          </p>
          <footer className="blockquote-footer"><i><u>Subham</u></i></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Aboutcard;
