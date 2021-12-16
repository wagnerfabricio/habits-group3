import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  section {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #4f4f4f;
    padding: 15px;
  }

  .home__header {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    width: 100%;
    max-width: 1200px;
    height: 5%;
    padding: 0 20px 0 20px;
  }
  .home__header ul {
    display: flex;
  }
  .home__header li {
    margin: 0 5px 0 10px;
    list-style: none;
    font-size: 20px;
  }
  .home__header li a {
    color: #ffffff;
  }
  .home__top {
    height: 100vh;
    display: flex;
    max-width: 1200px;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-grey-100);
    color: var(--color-white);
    margin: 0 auto;
    border-radius: 20px 20px 0 0;
  }

  .home__top__frist {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 45%;
    max-width: 1200px;
  }
  .top__frist__left {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top__frist__left img {
    height: 80%;
  }
  .top__frist__right {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top__frist__right h2 {
    font-size: 50px;
    width: 60%;
    margin: 0 auto;
  }

  .home__top__second {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    max-width: 1200px;
    height: 45vh;
  }

  .top__second__left {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .top__second__left p {
    max-width: 500px;
    font-size: 1.5em;
    text-align: center;
  }
  .top__second__left button {
    height: 70px;
    width: 300px;
    background-color: #ffffff00;
    border: 5px solid var(--color-white);
    font-size: 30px;
    font-weight: bold;
    color: var(--color-white);
    margin-top: 30px;
  }
  .top__second__left button:hover {
    color: var(--color-grey-100);
    background-color: var(--color-white);
  }
  .top__second__right {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top__second__right img {
    height: 80%;
  }

  .home__bot {
    height: 50vh;
    width: 100vw;
    max-width: 1200px;
    background-color: #f3f3f3;
    margin: 0 auto;
    display: flex;
  }
  .home__bot p {
    max-width: 70%;
    text-align: center;
    color: var(--color-grey-50);
    margin-top: 10px;
  }
  .home__bot h4 {
    color: var(--color-grey-100);
    font-size: 20px;
    margin-top: 20px;
  }

  .circles {
    background-color: #4f4f4f;
    border-radius: 100%;
    height: 250px;
    width: 250px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .home__bot__frist {
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home__bot__frist img {
    height: 80%;
    width: 80%;
    box-sizing: border-box;
  }
  .home__bot__mid {
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home__bot__mid img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
  .home__bot__last {
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home__bot__last img {
    height: 70%;
    width: 70%;
    box-sizing: border-box;
  }
`;
