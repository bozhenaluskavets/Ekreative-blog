import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const Content = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
`;

export const Announcement = styled.div`
  margin: 0 auto;

  @media ${devices.laptop} {
    width: 100%;
  }
`;

export const AnnounContent = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 20px;
`;

export const Text = styled.p`
  margin: 70px 0 20px;
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
