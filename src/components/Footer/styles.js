import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#ef5533")};
  color: ${(props) => (props.whiteSchema ? "##000000" : "#000000")};
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  width: 100%;
  height: 3vh;
  transition: 0.4s;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  p {
    margin-left: 10px;
  }
`;
