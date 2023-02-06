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

export const Announcement = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 15vh;
  @media ${devices.laptop} {
    width: 100%;
  }
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
  margin-top: 70px;
  color: ${COLORS.black};
  font-size: 20px;
  letter-spacing: 1.3px;
  line-height: 1.5;
  text-align: center;
  @media ${devices.desktop} {
    font-size: 20px;
    margin-top: 50px;
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
