import styled from 'styled-components';
import { devices } from '../../globalStyles/mediaQuery';

export const Content = styled.div`
  margin-left: 15%;
  margin-top: 100px;
  @media ${devices.laptopL} {
    margin-top: 90px;
  }
  @media ${devices.laptop} {
    margin-top: 80px;
  }
  @media ${devices.tablet} {
    margin-top: 70px;
  }
`;

export const InvitationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  max-width: 500px;
  letter-spacing: 3px;
  margin-top: 7%;
  @media ${devices.laptopL} {
    font-size: 60px;
  }
  @media ${devices.laptop} {
    font-size: 50px;
  }
  @media ${devices.tablet} {
    font-size: 40px;
  }
`;

export const Image = styled.img`
  right: 0;
  overflow: hidden;
  object-fit: cover;
  @media ${devices.mobile} {
    display: none;
  }
`;

export const StartDetails = styled.div`
  display: flex;
  margin-top: 5%;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  font-size: 25px;
  max-width: 370px;
  line-height: 2;
  margin-right: 40px;
  @media ${devices.laptopL} {
    font-size: 20px;
    max-width: 300px;
  }
  @media ${devices.tablet} {
    font-size: 17px;
  }
  @media ${devices.tablet} {
    padding-bottom: 15px;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2;
  @media ${devices.tablet} {
    flex-direction: row;
  }
`;
