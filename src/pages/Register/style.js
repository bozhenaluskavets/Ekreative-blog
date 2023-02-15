import styled from 'styled-components';
import { devices } from '../../globalStyles/mediaQuery';

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  text-align: left;
  @media ${devices.laptopL} {
    margin-top: 35px;
  }
  @media ${devices.tablet} {
    margin-top: 30px;
  }
  @media ${devices.mobile} {
    margin-top: 20px;
  }
`;

export const Centering = styled.div`
  width: 35%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media ${devices.laptopL} {
    width: 60%;
  }
  @media ${devices.laptop} {
    width: 70%;
  }
  @media ${devices.tablet} {
    width: 80%;
  }
`;
