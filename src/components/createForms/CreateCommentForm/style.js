import styled from 'styled-components';
import { devices } from '../../../globalStyles/mediaQuery';

export const Content = styled.div`
  margin-top: 50px;
  @media ${devices.tablet} {
    margin-top: 30px;
  }
  @media ${devices.mobile} {
    margin-top: 10px;
  }
`;
