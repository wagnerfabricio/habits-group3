import styled from "styled-components";

export const Container = styled.footer`
  background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#ef5533")};
  color: ${(props) => (props.whiteSchema ? "##000000" : "#000000")};
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  width: 100vw;
  height: 30px;
  transition: 0.4s;
  position: fixed;
  bottom: 0;
  left: 0;
  p {
    margin-left: 10px;
  }
`;
