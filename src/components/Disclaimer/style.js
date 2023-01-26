import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

export const DisclaimerMessage = styled.h4`
  font-size: 25px;
  font-weight: 200;
  margin: 0 auto;
  text-align: center;
  line-height: 35px;
  max-width: 60%;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto 0;
  width: 300px;
`;

export const Element = styled.p`
  cursor: pointer;
  transition: 0.3s;
  font-size: 25px;
  font-weight: 300;
  a:hover {
    color: ${COLORS.dark_grey};
  }
`;
