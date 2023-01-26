import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

export const Items = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const Item = styled.div`
  padding: 0 30px 20px 0;
  border-radius: 5px;
  margin: 0 20px 20px;
  height: 300px;
  transition: 0.5s;
  position: relative;
`;

export const Elements = styled.div`
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
`;

export const Extra = styled.h5`
  transition: 0.3s;
  color: ${COLORS.black};
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
`;
