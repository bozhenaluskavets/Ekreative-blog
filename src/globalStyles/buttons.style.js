import styled from 'styled-components';
import { COLORS } from './colors';
import { devices } from './mediaQuery';

export const Button = styled.button`
  color: ${COLORS.white};
  font-size: 20px;
  font-weight: 300;
  padding: 10px 27px;
  cursor: pointer;
  transition: 0.3s;
  border: transparent;
  opacity: 0.7;
  background-color: ${COLORS.dark_grey};
  border-radius: 81% 19% 66% 34% / 35% 24% 76% 65%;
  :disabled {
    background-color: ${COLORS.medium_grey};
    border-radius: 22% 78% 23% 47% / 37% 20% 80% 63%;
  }
  @media ${devices.laptopL} {
    font-size: 18px;
    padding: 8px 24px;
  }
  @media ${devices.tablet} {
    font-size: 16px;
    padding: 6px 20px;
  }
  @media ${devices.mobile} {
    font-size: 14px;
    padding: 5px 15px;
  }
`;

export const OBcentering = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px 0 0;
`;

export const OptionsButton = styled.button`
  font-size: 21px;
  margin: 4px 0 20px 0;
  color: ${COLORS.white};
  padding: 4px 10px;
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
    font-size: 14px;
  }
  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

export const EditDeleteOptions = styled.span`
  font-size: 15px;
  position: absolute;
  right: 0;
  color: ${COLORS.black};
  cursor: pointer;
  transition: 0.3s;
  margin-left: 15px;
  :hover {
    color: ${COLORS.dark_grey};
  }
  :last-child {
    right: 60px;
  }
  @media ${devices.laptop} {
    font-size: 14px;
  }
  @media ${devices.tablet} {
    font-size: 12px;
    :last-child {
      right: 50px;
    }
  }
  @media ${devices.mobile} {
    font-size: 10px;
    :last-child {
      right: 40px;
    }
  }
`;
