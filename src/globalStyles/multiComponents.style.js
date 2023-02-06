import styled from 'styled-components';
import { COLORS } from './colors';
import { devices } from './mediaQuery';

export const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${COLORS.black};
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  width: 80%;
  margin: 0 auto;
  @media ${devices.desktop} {
    font-size: 35px;
  }
  @media ${devices.laptop} {
    font-size: 28px;
  }
  @media ${devices.tablet} {
    font-size: 25px;
  }
  @media ${devices.mobile} {
    font-size: 20px;
  }
`;
