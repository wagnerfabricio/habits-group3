import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: red;
      font-size: 14px;
    }
  }
`;

export const InputContainer = styled.div`
  background-color: var(--color-grey-100);
  border-radius: 10px;
  border: 2px solid var(--color-grey-100);;
  color: #666360;
  padding: 1rem;
  width: 300px;
  display: flex;
  margin: 5px;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-red);
      svg {
        color: var(--color-red);
      }
    `}
  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--color-white);
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 1rem;
  }

  @media (max-width: 500px) {
    width: 70vw;
  }
`;