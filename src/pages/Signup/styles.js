import styled, { keyframes } from "styled-components";
import SignUpImage from "../../assets/images/cadastre-se.svg";

export const Container = styled.div`
  height: calc(100vh - 3vh);
  display: flex;
  align-items: stretch;
`;


export const Background = styled.div`

  @media (min-width: 999px) {
    flex: 1;
    background: url(${SignUpImage}) no-repeat center,
      linear-gradient(pink, blue, purple);
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
  
  background: linear-gradient(pink, blue, purple);


  .form-father {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 10px;    
    background-color: white;
    border-radius: 10px;
    width: 25%;
    gap: 10px 0;
  }
 
  @media (min-width: 800px) {
    width: 40%;
    form{
    padding: 30px 20px;
  }
  }

  @media (min-width: 1025px) {
    width: 40%;
    form{
    padding: 100px;
  }
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
      margin:0.1rem;
      a {
        font-weight: bold;
        color: #c85311;
      }
    }
  }
`;
