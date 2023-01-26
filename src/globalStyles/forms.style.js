import styled from 'styled-components';
import { COLORS } from './colors';

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
`;

export const Error = styled.p`
  color: ${COLORS.red};
  font-size: 15px;
  padding: 0 0 20px;
  text-align: left;
`;
