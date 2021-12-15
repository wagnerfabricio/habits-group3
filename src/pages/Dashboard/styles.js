import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  padding: 10px;
  .main {
    display: none;
    @media (min-width: 800px) {
      display: block;
    }
  }
`;
