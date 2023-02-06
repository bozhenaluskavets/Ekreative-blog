import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const Content = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
  @media ${devices.laptopL} {
    width: 90%;
  }
  @media ${devices.laptop} {
    width: 100%;
  }
`;

export const Post = styled.div`
  margin: 0 auto 50px;
  padding-top: 15vh;
  position: relative;
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

export const Text = styled.p`
  margin-top: 50px;
  color: ${COLORS.black};
  font-size: 22px;
  letter-spacing: 1.3px;
  line-height: 1.5;
  @media ${devices.desktop} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
    font-size: 18px;
    margin-top: 30px;
  }
  @media ${devices.tablet} {
    font-size: 15px;
  }
  @media ${devices.mobile} {
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const Subtitle = styled.h4`
  font-size: 30px;
  font-weight: 200;
  margin: 30px 0;
  text-align: left;
  @media ${devices.desktop} {
    font-size: 28px;
  }
  @media ${devices.laptop} {
    font-size: 25px;
    margin: 20px 0;
  }
  @media ${devices.tablet} {
    font-size: 22px;
    margin: 10px 0;
  }
  @media ${devices.mobile} {
    font-size: 18px;
    margin: 5px 0;
  }
`;

export const Align = styled.div`
  position: absolute;
  right: -15%;
  width: 80%;
`;
