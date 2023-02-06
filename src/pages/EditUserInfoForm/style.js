import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const Back = styled.button`
  margin-top: 25px;
  width: 100%;
  color: ${COLORS.black};
  font-size: 20px;
  font-weight: 300;
  padding: 10px 27px;
  cursor: pointer;
  transition: 0.3s;
  border: transparent;
  opacity: 0.7;
  background-color: ${COLORS.light_grey};
  border-radius: 81% 19% 66% 34% / 35% 24% 76% 65%;
  :hover {
    background-color: ${COLORS.medium_grey};
    border-radius: 22% 78% 23% 47% / 37% 20% 80% 63%;
  }
  @media ${devices.laptopL} {
    font-size: 18px;
    padding: 8px 24px;
    margin-top: 20px;
  }
  @media ${devices.tablet} {
    font-size: 16px;
    padding: 6px 20px;
    margin-top: 15px;
  }
  @media ${devices.mobile} {
    font-size: 14px;
    padding: 5px 15px;
    margin-top: 10px;
  }
`;
