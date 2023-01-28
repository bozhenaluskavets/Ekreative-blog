import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

export const Back = styled.button`
  margin-top: 30px;
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
`;
