import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  height: 100vh;
  box-sizing: border-box;

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 10px;
    gap: 30px;
    background-color: var(--color-grey-50);
  }
  .main {
    display: none;
    @media (min-width: 1025px) {
      display: block;
    }
  }
`;
