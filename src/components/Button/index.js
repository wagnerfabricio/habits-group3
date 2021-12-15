import { Container } from "./styles";
import React from "react";

const Button = ({ children, ...rest }) => (
  <Container type="submit" {...rest}>
    {children}
  </Container>
);

export default Button;
