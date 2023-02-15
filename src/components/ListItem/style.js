import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const Items = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  width: 25%;
  @media ${devices.laptop} {
    width: 50%;
    padding-top: 20px;
  }
  @media ${devices.mobile} {
    width: 100%;
    padding-top: 20px;
  }
`;

export const Item = styled.div`
  padding: 0 15px 20px;
  border-radius: 5px;
  margin: 0 20px 20px;
  height: 200px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  ${(props) => {
    if (props.showAsNew) {
      return `box-shadow: 0 5px 17px -4px ${COLORS.medium_grey};`;
    }
    return `box-shadow: none;`;
  }}
  @media ${devices.desktop} {
    margin: 0 20px;
  }
  @media ${devices.laptopL} {
    margin: 0 20px 20px;
    height: 170px;
  }
  @media ${devices.laptop} {
    width: 80%;
  }
  @media ${devices.mobile} {
    margin: 0 20px 20px;
    height: 140px;
  }
`;

export const Extra = styled.h5`
  transition: 0.3s;
  padding: 10px;
  letter-spacing: 1.5px;
  font-size: 25px;
  text-align: center;
  border-radius: 22% 78% 42% 58% / 30% 67% 33% 70%;
  background-color: ${COLORS.light_grey};
  :hover {
    border-radius: 22% 78% 42% 58% / 57% 36% 64% 43%;
    background-color: ${COLORS.medium_grey};
  }
  @media ${devices.desktop} {
    font-size: 22px;
  }
  @media ${devices.laptopL} {
    font-size: 19px;
  }
  @media ${devices.mobile} {
    font-size: 22px;
    padding: 5px;
  }
`;

export const Elements = styled.div`
  right: 0;
  position: absolute;
  bottom: 20px;
  background-color: ${COLORS.ultra_light_grey};
  border-radius: 40% 53% 10% 74% / 37% 76% 10% 55%;
`;

export const Element = styled.p`
  color: ${COLORS.black};
  font-size: 15px;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
  text-align: right;
  @media ${devices.laptopL} {
    font-size: 12px;
    margin-bottom: 10px;
  }
  @media ${devices.mobile} {
    font-size: 12px;
    margin-bottom: 3px;
  }
`;
