import styled, { keyframes } from "styled-components";
import SignUpImage from '../../assets/images/login-image.svg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${SignUpImage}) no-repeat center, linear-gradient(pink, blue, purple);
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
  max-width: 700px;
  background: linear-gradient(pink, blue, purple);

  button {
    background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#0c0d0d")};
    color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")};
    height: 45px;
    border-radius: 0.5rem;
    border: 0;
    
    width: 100%;
    font-weight: 600;
    transition: 0.5s;
    border: 2px solid black;
    font-family: "Roboto Mono";
    margin-top: 1rem;
    :hover {
        border: 2px solid #c85311;
  }
  }
  .form-father{
      width: 30vw;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 100px;
      background-color: white;
      border-radius: 10px;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
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
  animation: ${appearFromRight} 1s;
  form {
    margin: 80px 0;
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
`;
