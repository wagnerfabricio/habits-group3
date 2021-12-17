import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-grey-50);
  /* height: calc(100vh - 30px); */
  border-radius: 10px;
  box-sizing: border-box;
  color: var(--color-white);
`;

export const GridBox = styled.div`
  height: 87vh;
  box-sizing: border-box;

  @media (min-width: 800px) {
    display: grid;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Content = styled.div`
  padding: 10px;

  &.group {
    display: grid;
    grid-template-rows: 0.3fr 5fr;
    grid-row-gap: 10px;

    height: 86vh;
    box-sizing: border-box;
<<<<<<< HEAD
=======

    @media (min-width: 800px) and (max-width: 1200px) {
      height: 36vh;
    }
>>>>>>> developer
  }

  &.groups_list {
    background: var(--color-grey-50);
    border-radius: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
  }
`;

export const Header = styled.header`
  img {
    object-fit: cover;
    object-position: bottom;

    width: 100%;
    height: 6vw;
    border-radius: 10px 10px 0 0;
  }

  p {
    font-size: 1rem;
    color: grey;
  }

  span {
    font-weight: bold;
  }
`;

export const LeftBox = styled.div`
  height: 87vh;
  display: grid;
  grid-template-rows: 0.3fr 2.6fr 0.3fr 2fr;
  grid-row-gap: 10px;
  padding: 10px;
  box-sizing: border-box;
<<<<<<< HEAD
=======

  @media (min-width: 800px) and (max-width: 1200px) {
    height: 50vh;
  }
>>>>>>> developer
`;

export const HabitsList = styled.ul`
  list-style-type: none;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow-y: scroll;
`;

export const ActivitiesList = styled.ul`
  list-style-type: none;
  background: #f0ede9;
  border-radius: 10px;
  overflow-y: scroll;

  h2 {
    padding: 10px;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
