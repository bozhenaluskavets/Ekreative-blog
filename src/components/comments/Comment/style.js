import styled from 'styled-components';
import { devices } from '../../../globalStyles/mediaQuery';

export const Comments = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  position: relative;
`;

export const Comment = styled.div`
  width: 80%;
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
  right: 0;
`;
