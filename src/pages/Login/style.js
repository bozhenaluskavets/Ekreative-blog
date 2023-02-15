import styled from 'styled-components';
import { devices } from '../../globalStyles/mediaQuery';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
