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
  margin-bottom: 15px;
  letter-spacing: 1.5px;
  font-size: 22px;
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

export const OptionsButton = styled.button`
  margin: 10px auto;
  font-size: 21px;
  color: ${COLORS.white};
  padding: 0 10px;
  border: transparent;
  color: ${COLORS.black};
  border-radius: 88% 12% 76% 24% / 30% 30% 70% 70%;
  background-color: ${COLORS.ultra_light_grey};
  transition: 0.3s;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    border-radius: 21% 79% 70% 30% / 68% 9% 91% 32%;
    background-color: ${COLORS.light_grey};
  }
  @media ${devices.laptopL} {
    font-size: 17px;
  }
  @media ${devices.tablet} {
    font-size: 16px;
  }
  @media ${devices.mobile} {
    font-size: 15px;
  }
`;

export const Margin = styled.div`
  margin: 0 0 0 -10px;
  display: flex;
  flex-direction: column;
`;
