import styled from 'styled-components';
import { COLORS } from '../../../globalStyles/colors';
import { devices } from '../../../globalStyles/mediaQuery';

export const Comments = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  position: relative;
  align-items: flex-end;
`;

export const Comment = styled.div`
  width: 80%;
  box-shadow: -6px -0 5px -5px ${COLORS.medium_grey};
  padding: 5px 0 5px 10px;
  @media ${devices.desktop} {
    font-size: 18px;
  }
  @media ${devices.laptop} {
    font-size: 16px;
  }
  @media ${devices.tablet} {
    font-size: 14px;
  }
  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

export const Options = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: end;
`;
