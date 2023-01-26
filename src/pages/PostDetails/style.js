import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

export const Content = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
`;

export const Post = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 15vh;
  position: relative;
`;

export const Text = styled.p`
  margin-top: 70px;
  color: ${COLORS.black};
  font-size: 20px;
  letter-spacing: 1.3px;
  line-height: 1.5;
`;

export const Subtitle = styled.h4`
  font-size: 30px;
  font-weight: 200;
  margin-top: 30px;
  text-align: left;
`;

export const Align = styled.div`
  position: absolute;
  right: -15%;
  width: 80%;
`;
