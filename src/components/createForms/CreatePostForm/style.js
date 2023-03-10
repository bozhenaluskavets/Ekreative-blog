import styled from 'styled-components';
import { COLORS } from '../../../globalStyles/colors';
import { devices } from '../../../globalStyles/mediaQuery';

export const Content = styled.div`
  margin: 30px 30%;
  @media ${devices.laptop} {
    margin: 25px 25%;
  }
  @media ${devices.tablet} {
    margin: 20px 20%;
  }
  @media ${devices.mobile} {
    margin: 10px 10%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  color: ${COLORS.black};
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  border: solid 1px;
  border-color: ${COLORS.black};
  opacity: 0.6;
  border-radius: 22% 78% 53% 77% / 87% 40% 80% 43%;
  outline: none;
  padding: 20px 55px;
`;
