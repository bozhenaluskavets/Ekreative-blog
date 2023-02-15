import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const EditDeleteOptions = styled.span`
  font-size: 15px;
  color: ${COLORS.black};
  cursor: pointer;
  transition: 0.3s;
  margin-left: 15px;
  display: flex;
  align-items: flex-end;
  :hover {
    color: ${COLORS.dark_grey};
  }
  @media ${devices.laptop} {
    font-size: 14px;
  }
  @media ${devices.tablet} {
    font-size: 12px;
  }
  @media ${devices.mobile} {
    font-size: 8px;
  }
`;

export const Text = styled.p`
  padding-right: 3px;
`;
