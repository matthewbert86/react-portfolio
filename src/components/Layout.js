import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";



const Styles = styled.div`

.mainLayout {
  

}

.container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
    width: 100%;
     padding-right: 0; 
     padding-left: 0; 
     margin-right: auto; 
     margin-left: auto; 
}

`


export const Layout = (props) => (
    <Styles>
    <Container fluid className="mainLayout">
        {props.children}
    </Container>
    </Styles>
);