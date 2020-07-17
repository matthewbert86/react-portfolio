import React from 'react'
import { Jumbotron } from "./components/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`

.homeStyle {
  background-color: white
  margin-top: -5px;
  
}

.home-container {
  margin: 0 auto;
  justify-content: center;
}

.cardOne {
  background-color: #171f5e;
  margin: 15px;
  border: 8px solid #f5ad31;
  border-radius: 25px;
}

.cardTwo {
  background-color: #171f5e;
  margin: 15px;
  border: 8px solid #f5ad31;
  border-radius: 25px;
}

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

`;

export const Home = () => (
  <Styles>
         <div>
    <Jumbotron />
    <Container fluid className="homeStyle">
        <Row className="home-container">
          <Col lg={5} className="cardOne">
            <h1 className="headline">Blog</h1>
          </Col>
          <Col lg={5} className="cardTwo">
            
            <h1 className="subHeading">Resources</h1>
            <p>
              New Website launching August 2020!
                   </p>
          </Col>
          </Row>
    </Container>
         </div>
  </Styles>
       );
