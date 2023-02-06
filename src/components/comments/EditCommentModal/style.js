import styled from 'styled-components';
import { COLORS } from '../../../globalStyles/colors';
import { devices } from '../../../globalStyles/mediaQuery';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.black_05_opacity};
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px 60px;
  border-radius: 10px;
  box-shadow: 0 5px 10px -4px ${COLORS.black};
  background-color: ${COLORS.white};
  opacity: 1;
  @media ${devices.tablet} {
    padding: 45px 20px;
  }
  @media ${devices.mobile} {
    padding: 30px 35px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  @media ${devices.tablet} {
    font-size: 24px;
  }
  @media ${devices.mobile} {
    font-size: 17px;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Option = styled.div`
  font-size: 22px;
  color: ${COLORS.black};
  margin: 0 10px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: ${COLORS.dark_grey};
  }
  @media ${devices.tablet} {
    font-size: 18px;
  }
  @media ${devices.mobile} {
    font-size: 14px;
  }
`;
