import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const Content = styled.div`
  width: 65%;
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
`;

export const PostContent = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 20px;
`;

export const Options = styled.div`
  display: flex;
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

export const Details = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

export const Time = styled.div`
  display: flex;
  text-align: left;
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
