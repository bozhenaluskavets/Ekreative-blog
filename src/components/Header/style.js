import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

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
  align-items: baseline;
  a:hover {
    color: ${COLORS.dark_grey};
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
`;

export const Item = styled.p`
  cursor: pointer;
  transition: 0.3s;
  font-size: 20px;
  font-weight: 300;
  color: ${COLORS.white};
  margin-right: 30px;
`;

export const Extra = styled.span`
  cursor: pointer;
  font-size: 35px;
  color: ${COLORS.white};
`;

export const User = styled.span`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  margin-left: 5px;
`;
