import styled from 'styled-components';
import { COLORS } from './colors';
import { devices } from './mediaQuery';

export const Input = styled.input`
  color: ${COLORS.black};
  font-size: 20px;
  padding: 15px 55px;
  cursor: pointer;
  margin-bottom: 10px;
  border: solid 1px ${COLORS.dark_grey};
  border-radius: 22% 78% 53% 77% / 87% 40% 80% 43%;
  outline: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media ${devices.laptopL} {
    font-size: 18px;
    padding: 13px 50px;
    margin-bottom: 8px;
  }
  @media ${devices.laptop} {
    font-size: 16px;
    padding: 10px 45px;
    margin-bottom: 6px;
  }
  @media ${devices.tablet} {
    font-size: 14px;
    padding: 8px 40px;
    margin-bottom: 5px;
  }
  @media ${devices.mobile} {
    font-size: 12px;
    padding: 6px 35px;
    margin-bottom: 4px;
  }
`;

export const Error = styled.p`
  color: ${COLORS.red};
  font-size: 15px;
  padding: 10px 0 12px;
  text-align: left;
  @media ${devices.laptopL} {
    font-size: 16px;
    padding: 8px 0 10px;
  }
  @media ${devices.laptop} {
    font-size: 14px;
    padding: 6px 0 8px;
  }
  @media ${devices.tablet} {
    font-size: 12px;
    padding: 4px 0 6px;
  }
  @media ${devices.mobile} {
    font-size: 10px;
    padding: 2px 0 4px;
  }
`;
