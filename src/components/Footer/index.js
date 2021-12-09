import { Container } from "./styles";
import React from "react";

const Footer = ({ children, whiteSchema = false }) => (
  <Container whiteSchema={whiteSchema}> {children} </Container>
);

export default Footer;
