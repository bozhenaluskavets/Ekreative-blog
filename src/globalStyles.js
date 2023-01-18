import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
    }

    a {
        color: rgb(0, 0, 0);
        transition: 0.3s;
    }
`;

export const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: rgb(0, 0, 0);
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  width: 100%;
`;

export const Input = styled.input`
  color: rgb(0, 0, 0);
  font-size: 20px;
  padding: 20px 55px;
  cursor: pointer;
  margin-bottom: 10px;
  border: solid 1px rgba(0, 0, 0, 0.6);
  border-radius: 22% 78% 53% 77% / 87% 40% 80% 43%;
  outline: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  color: rgba(255, 255, 255, 1);
  font-size: 25px;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s;
  border: transparent;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 81% 19% 66% 34% / 35% 24% 76% 65%;

  :disabled {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 22% 78% 23% 47% / 37% 20% 80% 63%;
  }
`;

export const OBcentering = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px 0 0;
`;

export const OptionsButton = styled.button`
  font-size: 25px;
  margin: 4px 0 20px 0;
  color: rgba(255, 255, 255, 1);
  padding: 7px 20px;
  border: transparent;
  color: rgba(0, 0, 0, 1);
  border-radius: 88% 12% 76% 24% / 30% 30% 70% 70%;
  background-color: rgb(244, 244, 244);
  transition: 0.3s;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    border-radius: 21% 79% 70% 30% / 68% 9% 91% 32%;
    background-color: rgb(234, 234, 234);
  }
`;

export const Error = styled.p`
  color: rgb(186, 0, 0);
  font-size: 15px;
  padding: 0 0 20px;
  text-align: left;
`;

// COLOR PALETTE:

// WHITE rgb(255, 255, 255)
// ULTRA LIGHT GREY rgb(244, 244, 244)
// LIGHT GREY rgb(234, 234, 234)
// MEDIUM GREY rgb(200, 200, 200)
// DARK GREY rgb(76, 76, 76)
// BLACK rgb(0, 0, 0)
