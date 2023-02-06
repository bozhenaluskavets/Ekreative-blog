import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const Container = styled.div`
  box-shadow: 0 5px 10px -4px ${COLORS.black};
  z-index: 100000;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${COLORS.white};
  height: 100px;
  display: flex;
  align-items: center;
  @media ${devices.laptopL} {
    height: 90px;
  }
  @media ${devices.laptop} {
    height: 80px;
  }
  @media ${devices.tablet} {
    height: 70px;
  }
  @media ${devices.mobile} {
    height: 60px;
  }
`;

export const ExtraContainer = styled.div`
  display: flex;
`;

export const Nav = styled.nav`
  width: 60%;
  margin: 0 auto;
  padding: 0 auto 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a:hover {
    color: ${COLORS.dark_grey};
  }
  @media ${devices.laptopL} {
    width: 65%;
  }
  @media ${devices.laptop} {
    width: 70%;
  }
  @media ${devices.tablet} {
    width: 85%;
  }
  @media ${devices.mobile} {
    width: 90%;
  }
`;

export const Items = styled.div`
  display: flex;
  margin-right: 0;
`;

export const ExtraItems = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 30px;
  @media ${devices.laptop} {
    margin-right: 24px;
  }
  @media ${devices.tablet} {
    margin-right: 12px;
  }
  @media ${devices.mobile} {
    display: none;
  }
`;

export const Item = styled.p`
  cursor: pointer;
  transition: 0.3s;
  font-size: 20px;
  font-weight: 300;
  color: ${COLORS.white};
  margin-right: 30px;
  @media ${devices.laptopL} {
    font-size: 18px;
    margin-right: 27px;
  }
  @media ${devices.laptop} {
    font-size: 16px;
    margin-right: 24px;
  }
  @media ${devices.tablet} {
    font-size: 13px;
    margin-right: 10px;
  }
`;

export const Extra = styled.span`
  cursor: pointer;
  font-size: 35px;
  color: ${COLORS.white};
  @media ${devices.laptopL} {
    font-size: 30px;
  }
  @media ${devices.laptop} {
    font-size: 27px;
  }
  @media ${devices.tablet} {
    font-size: 22px;
  }
`;

export const User = styled.span`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  margin-left: 5px;
`;
