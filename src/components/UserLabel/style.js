import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const User = styled.div`
  margin-bottom: 30px;
  width: fit-content;
  display: flex;
  @media ${devices.laptop} {
    margin-bottom: 20px;
  }
  @media ${devices.tablet} {
    margin-bottom: 10px;
  }
  @media ${devices.mobile} {
    margin-bottom: 5px;
    align-items: center;
  }
`;

export const Name = styled.p`
  color: ${COLORS.black};
  font-size: 25px;
  letter-spacing: 1.3px;
  line-height: 1.5;
  margin-left: 5px;
  font-weight: 600;
  box-shadow: ${COLORS.medium_grey} 0px 12px 10px -10px;
  @media ${devices.laptop} {
    font-size: 20px;
  }
  @media ${devices.tablet} {
    font-size: 15px;
  }
  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

export const CUser = styled.div`
  margin-bottom: 7px;
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const CName = styled.p`
  color: ${COLORS.black};
  font-size: 16px;
  margin: 0 5px;
  font-weight: 600;
  box-shadow: ${COLORS.medium_grey} 0px 9px 7px -7px;
  @media ${devices.laptop} {
    font-size: 15px;
  }
  @media ${devices.tablet} {
    font-size: 14px;
  }
  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

export const CAvatar = styled.img`
  object-fit: cover;
  width: 25px;
  border-radius: 50%;
  box-shadow: ${COLORS.black_03_opacity} 0px 7px 29px 0px;
`;
