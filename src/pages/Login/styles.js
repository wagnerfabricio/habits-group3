import styled, { keyframes } from "styled-components";
import SignUpImage from "../../assets/images/login-image.svg";

export const Container = styled.div`
  height: calc(100vh - 3vh);
  display: flex;
  align-items: stretch;

`;

export const Background = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    background: url(${SignUpImage}) no-repeat center,
    var(--color-grey-50);
    background-size: 40vw;
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;
  background-color: var(--color-grey-100);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    background-color: var(--color-grey-50);
    color: var(--color-white);
    gap: 10px 0;
    
    p{
      color: var(--color-white);
    }
    span{
      color: var(--color-grey-description)
    }

  }
  @media (min-width: 1299px) {
    width: 40%;

    form {
      padding: 70px 70px; 
      width: 440px !important;
    }
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  form {
    /* margin: 80px 0; */
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 3rem;
    }
    p {
      margin-top: 0.5rem;
      a {
        font-weight: bold;
        color: #c85311;
      }
    }
  }

  div {
    img {
      width: 240px;
      /* margin-bottom: 60px; */
    }
  }
  @media (min-width: 1299px) {
    img {
      display: none;
    }
  }
`;
