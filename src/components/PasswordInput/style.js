import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
`;

export const PasswordInput = styled.div`
  width: 100%;
`;

export const PasswordIcon = styled.div`
  position: absolute;
  padding-right: 30px;
  right: 0;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 17px;
  :hover {
    color: ${COLORS.dark_grey};
  }
  @media ${devices.laptopL} {
    margin-top: 14px;
  }
  @media ${devices.laptop} {
    margin-top: 9px;
  }
  @media ${devices.tablet} {
    margin-top: 6px;
  }
  @media ${devices.mobile} {
    margin-top: 4px;
  }
`;
