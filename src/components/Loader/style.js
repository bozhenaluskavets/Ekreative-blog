import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderItem = styled.span`
  width: 48px;
  height: 48px;
  border: 5px dotted ${COLORS.dark_grey};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${spinner} 2s linear infinite;
`;
