import styled from "styled-components";

export const Container = styled.div`
  font-family: ui-serif;
  width: 100%;
  min-height: 140px;
  color: var(--color-white);
  background: var(--color-grey-100);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  border-right: 1px solid transparent;

  header {
    color: var(--color-white);
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;

    h4 {
      margin-right: 20px;
    }

    button {
      background: none;
      :hover {
        background: var(--color-white);
      }
    }

    svg {
      color: var(--color-grey-description);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FlexColumn = styled.div`
  display: flex;
  justify-content: space-between;

  color: var(--color-grey-description);

  span {
    font-weight: bold;
    margin-right: 5px;
  }

  button {
    background: none;
    :hover {
      background: var(--color-white);
    }
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  svg {
    color: var(--color-grey-description);
  }
`;
