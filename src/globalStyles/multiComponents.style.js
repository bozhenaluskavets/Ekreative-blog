import styled from 'styled-components';
import { COLORS } from './colors';
import { devices } from './mediaQuery';

export const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding-top: 130px;
  @media ${devices.laptopL} {
    padding-top: 115px;
  }
  @media ${devices.laptop} {
    padding-top: 105px;
  }
  @media ${devices.tablet} {
    padding-top: 90px;
  }
  @media ${devices.mobile} {
    padding-top: 75px;
  }
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

export const Avatar = styled.img`
  object-fit: cover;
  width: 40px;
  border-radius: 50%;
  box-shadow: ${COLORS.black_03_opacity} 0px 7px 29px 0px;
  @media ${devices.laptop} {
    width: 40px;
  }
  @media ${devices.tablet} {
    width: 35px;
  }
  @media ${devices.mobile} {
    width: 30px;
  }
`;
