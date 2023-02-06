import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';
import { devices } from '../../globalStyles/mediaQuery';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  @media ${devices.tablet} {
    width: 70%;
  }
  @media ${devices.mobile} {
    width: 80%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Avatars = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  transition: 0.3s;
  z-index: 1000;
  margin-bottom: 5px;
  box-shadow: ${COLORS.black_03_opacity} 0px 7px 29px 0px;
  cursor: pointer;
  :hover {
    box-shadow: ${COLORS.black_05_opacity} 0px 5px 15px;
  }
  @media ${devices.desktop} {
    width: 110px;
    height: 110px;
  }
  @media ${devices.laptopL} {
    width: 90px;
    height: 90px;
  }
  @media ${devices.laptop} {
    width: 70px;
    height: 70px;
  }
  @media ${devices.tablet} {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
  @media ${devices.mobile} {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
`;

export const AvatarBlock = styled.label`
  width: 25%;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
`;

export const Input = styled.input`
  margin: 0 60px 10px;
  @media ${devices.desktop} {
    margin: 0 50px 10px;
  }
  @media ${devices.laptopL} {
    margin: 0 40px 8px;
  }
  @media ${devices.laptop} {
    margin: 0 30px 6px;
  }
  @media ${devices.tablet} {
    margin: 0 -45px 15px;
  }
  @media ${devices.mobile} {
    margin: 0 -45px 15px;
  }
`;
