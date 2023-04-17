import React from 'react'
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import Particle from '../../components/Particle';
import '../../assets/styles/style.css'
const Contact = () => {
  return (
    <Container fluid className="contact-section">
    <Particle />
    <Container>
         <a className="mailBtn" href="mailto:subhamgouda7890@gmail.com">
    <Button>Contact: subhamgouda7890@gmail.com</Button>
  </a>
  </Container>
  </Container>

  )
}

export default Contact