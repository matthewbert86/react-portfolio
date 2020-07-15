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
  margin: 0 10rem;
}



`

export const Home = () => (
  <Styles>
         <div>
    <Jumbotron />
    <Container fluid className="homeStyle">
        <Row className="home-container">
           <h2>Matthew Bert</h2>
           <p>
             I'm baby vHS art party pork belly, health goth echo park meh vegan
             single-origin coffee typewriter put a bird on it raw denim. Tumblr
             typewriter williamsburg mustache chia. Plaid deep v vinyl lo-fi
             cliche ethical you probably haven't heard of them tousled
             meditation church-key disrupt fam. Raw denim venmo plaid
             asymmetrical next level XOXO intelligentsia hella semiotics iPhone
             four dollar toast. Offal messenger bag master cleanse tattooed
             schlitz raclette enamel pin cloud bread banjo forage street art
             biodiesel try-hard. IPhone lumbersexual lyft tumblr, roof party
             tousled tote bag fixie mixtape YOLO plaid photo booth.
           </p>
        </Row>
    </Container>
         </div>
  </Styles>
       );
