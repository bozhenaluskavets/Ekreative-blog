import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const DisclaimerMessage = styled.h4`
  font-size: 25px;
  font-weight: 200;
  margin: 0 auto;
  text-align: center;
  line-height: 25px;
  max-width: 60%;
  @media ${devices.laptopL} {
    font-size: 20px;
    max-width: 70%;
  }
  @media ${devices.laptop} {
    font-size: 17px;
    max-width: 80%;
    line-height: 20px;
  }
  @media ${devices.tablet} {
    font-size: 14px;
    max-width: 90%;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto 10px;
  width: 300px;
  @media ${devices.laptopL} {
    width: 250px;
    margin: 25px auto 0;
  }
  @media ${devices.laptop} {
    width: 200px;
    margin: 20px auto 0;
  }
  @media ${devices.tablet} {
    width: 180px;
    margin: 15px auto 0;
  }
`;

export const Element = styled.p`
  cursor: pointer;
  transition: 0.3s;
  font-size: 25px;
  font-weight: 300;
  a:hover {
    color: ${COLORS.dark_grey};
  }
  @media ${devices.laptopL} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
    font-size: 17px;
  }
  @media ${devices.tablet} {
    font-size: 14px;
  }
`;
