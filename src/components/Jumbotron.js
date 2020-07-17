import React from "react";
import { Jumbotron as Jumbo, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import geekBrain from "../assets/geekBrain.svg";
import { 
    faFacebook, 
    faTwitter, 
    faInstagram,
    faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Styles = styled.div`
  .jumbo {
    background-color: #f2f4f5;
    color: black;
    padding: 20px 0 0 0;
  }

  .mainStyle {
    background-color: #f2f4f5;
  }

  .show-container {
    width: 100%;
    padding: 0 40px;
    background-color: #f2f4f5;
  }

  .logo {
    width: 550px;
    text-align: center;
    margin-top: -10%;
    margin-left: -8%;
    padding-left: 10px;
  }

  .headline {
    text-align: center;
    padding-top: 10px;
    padding-left: 20px;
    font-family: orbitron;
    font-weight: bold;
    font-size: 6.1rem;
    margin-bottom: -8px;
  }

  .subHeading {
    text-align: center;
    padding-left: 20px;
    font-family: orbitron;
    font-weight: bold;
    font-size: 2.5rem;
  }
  p {
    text-align: center;
    padding-top: 20px;
    padding-left: 20px;
    font-size: 28px;
    color: #2178be;
  }

  .icons {
    font-size: 70px;
    padding-left: 10px;
  }

  @media (min-width: 1200px) .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
    max-width: 100%;
  }

  @media only screen and (max-width: 600px) {
    .jumbo {
      background-color: #f2f4f5;
      color: black;
      margin: 0 auto !important;
      padding: 0 auto !important;
    }

    .mainStyle {
      background-color: #f2f4f5;
    }

    .show-container {
      width: 100%;
      margin: 0 auto !important;
      padding: 0;
      background-color: #f2f4f5;
    }

    .logo {
      width: 300px;
      margin: 0 35px !important;
      padding-left: 20px;
    }

    .headline {
      
      font-family: orbitron;
      font-weight: bold;
      font-size: 2.7rem;
      padding-bottom: 20px;
      margin-top: -15%;
    }

    .subHeading {
      text-align: center;
      
      font-family: orbitron;
      font-weight: bold;
      font-size: 1.9rem;
    }
    p {
      text-align: center;
      padding-top: 20px;
      font-size: 20px;
      color: #2178be;
    }
  }
`;

export const Jumbotron = () => (
         <Styles>
           <Jumbo fluid className="jumbo">
             <div className="overlay"></div>
             <Container fluid className="mainStyle">
               <Row className="show-container">
                 <Col lg={4}>
                   <img src={geekBrain} alt="Logo" className="logo" />
                 </Col>
                 <Col lg={8}>
                   <h1 className="headline">Mental Geek</h1>
                   <h3 className="subHeading">A Mental Health Community</h3>
                   <p>
                     New Website launching August 2020!
                   </p>
                   <p>
                     <FontAwesomeIcon icon={faFacebook} className="icons" />
                    <FontAwesomeIcon icon={faInstagram} className="icons" />
                     <FontAwesomeIcon icon={faTwitter} className="icons" />
                    <FontAwesomeIcon icon={faMedium} className="icons" />
                   </p>
                 </Col>
               </Row>
             </Container>
           </Jumbo>
         </Styles>
       );
