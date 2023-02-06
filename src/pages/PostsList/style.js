import styled from 'styled-components';
import { devices } from '../../globalStyles/mediaQuery';

export const Content = styled.div`
  padding-top: 15vh;
  display: flex;
  flex-wrap: wrap;
  @media ${devices.desktop} {
    justify-content: space-around;
  }
  @media ${devices.laptopL} {
    padding: 13vh 0 0;
  }
  @media ${devices.laptop} {
    padding: 12vh 0 0;
  }
  @media ${devices.tablet} {
    padding: 11vh 0 0;
  }
  @media ${devices.mobile} {
    padding: 10vh 0 0;
  }
`;
