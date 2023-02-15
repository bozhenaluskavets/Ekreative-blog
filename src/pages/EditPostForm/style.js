import styled from 'styled-components';
import { devices } from '../../globalStyles/mediaQuery';

export const Content = styled.div`
  margin: 0 30%;
  @media ${devices.laptopL} {
    padding: 12vh 0 0;
    margin: 0 25%;
  }
  @media ${devices.tablet} {
    padding: 11vh 0 0;
    margin: 0 15%;
  }
  @media ${devices.mobile} {
    padding: 10vh 0 0;
    margin: 0 10%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media ${devices.laptopL} {
    margin-top: 40px;
  }
  @media ${devices.laptop} {
    margin-top: 30px;
  }
  @media ${devices.tablet} {
    margin-top: 20px;
  }
  @media ${devices.mobile} {
    margin-top: 10px;
  }
`;
