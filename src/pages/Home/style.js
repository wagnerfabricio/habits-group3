import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  section {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #4f4f4f;
    padding: 15px 0 0 0;
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
    font-size: 12px;
  }
  .home__header li a {
    color: var(--color-white);
  }
  .home__top {
    height: 600px;
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
    height: 35%;
    width: 100%;
    max-width: 1200px;
  }
  .top__frist__left {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
  }
  .top__frist__left img {
    height: 60%;
    width: auto;
  }
  .top__frist__right {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top__frist__right h2 {
    font-size: 1em;
    width: 60%;
    margin: 0 auto;
  }
  .mobileRegister {
    height: 7%;
    width: 60%;
    background-color: #ffffff00;
    border: 3px solid var(--color-white);
    font-size: 16px;
    font-weight: bold;
    color: var(--color-white);
    margin: 15px 0 15px 0;
  }

  .home__top__second {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    max-width: 1200px;
    height: 35%;
  }

  .top__second__left {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
  }
  .top__second__left p {
    max-width: 500px;
    width: 95%;
    font-size: 0.7em;
    text-align: center;
  }
  .top__second__left button {
    display: none;
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
    height: 60%;
  }

  .home__bot {
    height: 500px;
    width: 100%;
    max-width: 1200px;
    background-color: #f3f3f3;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
  }
  .home__bot p {
    max-width: 100%;
    text-align: center;
    color: var(--color-grey-50);
    margin-top: 10px;
    font-size: 12px;
  }
  .home__bot h4 {
    color: var(--color-grey-100);
    font-size: 20px;
    margin-top: 20px;
    max-width: 100%;
    font-size: 16px;
    text-align: center;
  }

  .circles {
    background-color: #4f4f4f;
    border-radius: 100%;
    height: 120px;
    width: 120px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .home__bot__texts {
    margin: 0 auto 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }

  .home__bot__frist img {
    height: 80%;
    width: 80%;
    box-sizing: border-box;
  }

  .home__bot__mid img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
  .home__bot__frist,
  .home__bot__mid,
  .home__bot__last {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
  }
  .home__bot__mid {
    flex-direction: row-reverse;
  }

  .home__bot__last img {
    height: 70%;
    width: 70%;
    box-sizing: border-box;
  }

  @media (min-width: 1024px) {
    .home__top {
      height: 100vh;
    }
    .home__header li {
      font-size: 24px;
    }
    .top__frist__right h2 {
      font-size: 40px;
      max-width: 320px;
    }
    .top__second__left p {
      font-size: 1.5em;
    }
    .home__top__frist,
    .home__top__second {
      height: 45%;
    }

    .top__second__left button {
      display: initial;
      height: 70px;
      width: 300px;
      background-color: #ffffff00;
      border: 5px solid var(--color-white);
      font-size: 30px;
      font-weight: bold;
      color: var(--color-white);
      margin-top: 30px;
    }
    .top__second__right img,
    .top__frist__left img {
      height: 80%;
      padding: 10px;
    }

    .mobileRegister {
      display: none;
    }
    .home__bot {
      flex-direction: row;
      height: 60vh;
      width: 100%;
      padding-top: 0;
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
    .home__bot__frist,
    .home__bot__mid,
    .home__bot__last {
      flex-direction: column;
      width: 100%;
    }
    .home__bot__texts {
      width: 100%;
      height: 30%;
    }
    .home__bot__texts p {
      width: 80%;
      font-size: 18px;
      text-align: center;
    }

    .home__bot__texts h4 {
      width: 80%;
      text-align: center;
      font-size: 20px;
    }
  }
`;
