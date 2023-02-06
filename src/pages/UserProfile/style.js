import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media ${devices.tablet} {
    width: 80%;
  }
  @media ${devices.mobile} {
    width: 85%;
  }
`;

export const Content = styled.div`
  padding-top: 15vh;
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

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  @media ${devices.laptop} {
    align-items: flex-start;
  }
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const General = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  @media ${devices.laptop} {
    margin-left: 50px;
  }
  @media ${devices.tablet} {
    margin-left: 40px;
  }
  @media ${devices.mobile} {
    margin-left: 0;
  }
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 25%;
  height: fit-content;
  border-radius: 50%;
  box-shadow: ${COLORS.black_03_opacity} 0px 7px 29px 0px;
  @media ${devices.mobile} {
    width: 30%;
    margin-bottom: 20px;
  }
`;

export const Name = styled.div`
  margin-bottom: 30px;
  @media ${devices.tablet} {
    margin-bottom: 15px;
  }
`;

export const Item = styled.p`
  color: ${COLORS.black};
  font-size: 25px;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
  @media ${devices.laptopL} {
    font-size: 22px;
  }
  @media ${devices.laptop} {
    font-size: 20px;
  }
  @media ${devices.tablet} {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media ${devices.mobile} {
    font-size: 14px;
  }
`;

export const ExtraItem = styled.p`
  color: ${COLORS.black};
  font-size: 60px;
  letter-spacing: 1.5px;
  @media ${devices.laptopL} {
    font-size: 50px;
  }
  @media ${devices.laptop} {
    font-size: 40px;
  }
  @media ${devices.tablet} {
    font-size: 30px;
  }
  @media ${devices.mobile} {
    font-size: 20px;
  }
`;

export const Margin = styled.div`
  margin: 30px 0 0 -10px;
  @media ${devices.tablet} {
    margin-top: 10px;
  }
`;
