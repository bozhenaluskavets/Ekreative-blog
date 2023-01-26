import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

export const Content = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
`;

export const Announcement = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 15vh;
`;

export const Text = styled.p`
  margin-top: 70px;
  color: ${COLORS.black};
  font-size: 20px;
  letter-spacing: 1.3px;
  line-height: 1.5;
  text-align: center;
`;
