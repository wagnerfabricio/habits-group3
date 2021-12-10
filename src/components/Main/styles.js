import styled from "styled-components";

export const Container = styled.div`
  /* background-color: var(--color-grey-10); */
  background: #ffffff;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const GridBox = styled.div`
  height: 70vh;
  box-sizing: border-box;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
  }
`;

export const Content = styled.div`
  padding: 10px;

  &.group {
    display: grid;
    grid-template-rows: 0.3fr 5fr;
    grid-row-gap: 10px;

    height: 70vh;
    box-sizing: border-box;
  }

  &.groups_list {
    /* height: 90%; */
    background: var(--color-magenta);
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
    height: 10vw;
    border-radius: 10px 10px 0 0;
  }

  h2 {
    /* color: var(--color-grey-10); */
    /* text-shadow: 0px 0px 1px white; */
  }

  p {
    font-size: 1rem;
    color: var(--color-grey-10);
  }
`;

export const LeftBox = styled.div`
  height: 70vh;
  display: grid;
  grid-template-rows: 0.3fr 4fr 0.3fr 2fr;
  grid-row-gap: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

export const HabitsList = styled.ul`
  list-style-type: none;
  /* width: 100%; */
  /* height: 300px; */
  border-radius: 10px;
  margin-bottom: 10px;
  overflow-y: scroll;
`;

export const ActivitiesList = styled.ul`
  list-style-type: none;
  /* width: 100%; */
  /* height: 150px; */
  background: #f0ede9;
  border-radius: 10px;
  overflow-y: scroll;

  h2 {
    padding: 10px;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;
