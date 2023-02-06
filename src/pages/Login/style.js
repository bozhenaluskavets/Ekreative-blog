import styled from 'styled-components';
import { devices } from '../../globalStyles/mediaQuery';

export const Content = styled.div`
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${devices.laptopL} {
    padding: 13vh 0 0;
  }
  @media ${devices.laptop} {
    padding: 12vh 0 0;
  }
  @media ${devices.tablet} {
    padding: 11vh 0 0;
  }
  @media ${devices.mobile} {
    padding: 10vh 0 0;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  @media ${devices.laptopL} {
    margin-top: 35px;
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
