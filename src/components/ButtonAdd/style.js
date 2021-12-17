import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-green);
  font-size: 20px;
  font-weight: bold;
  border: 3px solid var(--color-green);

  &:hover {
    color: var(--color-white);
    background-color: var(--color-green);
    cursor: pointer;
  }
  svg {
    margin: 0 auto;
  }
`;
