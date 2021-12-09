import styled from "styled-components";

export const Container = styled.button`
 background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#EF5533")};
    color: ${(props) => (props.whiteSchema ? "#EF5533" : "#f5f5f5")};
    height: 45px;
    border-radius: 0.5rem;
    border: 0;
    width: 100%;
    max-width: 336px;
    font-weight: 600;
    transition: 0.5s;
    border: 2px solid #EF5533;
    margin-top: 1rem;
    :hover {
      border: 2px solid #f5f5f5;
    }
  `