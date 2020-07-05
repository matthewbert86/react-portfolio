import React from "react";
import { Jumbotron as Jumbo, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import matt from "../assets/matt.jpg";
import { 
    faGithub, 
    faTwitter, 
    faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Styles = styled.div`
  .jumbo {
    background-color: white;
    color: black;
    padding: 20px 0 0 0;
  }

  .show-container {
    width: 100%;
  }

  .logo {
    width: 375px;
    text-align: center;
  }

  .headline {
    text-align: center;
    padding-top: 10px;
    padding-left: 20px;
  }
  p {
    text-align: center;
    padding-left: 20px;
  }

  .icons {
      font-size: 50px;
      padding-left: 10px;
  }

 
`;

export const Jumbotron = () => (
         <Styles>
           <Jumbo fluid className="jumbo">
             <div className="overlay"></div>
             <Container>
               <Row className="show-container">
                 <Col lg={4}>
                   <img src={matt} alt="Logo" className="logo" />
                 </Col>
                 <Col lg={8}>
                   <h1 className="headline">Matt Learns From Teaching</h1>
                   <p>
                     I am a Full Stack JavaScript developer. The best way I have
                     been able to learn is to teach. I am using this website to
                     showcase my projects, and blog tutorials on how they were
                     built.
                   </p>
                   <p>
                     <FontAwesomeIcon icon={faGithub} className="icons" />
                     <FontAwesomeIcon icon={faTwitter} className="icons" />
                     <FontAwesomeIcon icon={faInstagram} className="icons" />
                   </p>
                 </Col>
               </Row>
             </Container>
           </Jumbo>
         </Styles>
       );
