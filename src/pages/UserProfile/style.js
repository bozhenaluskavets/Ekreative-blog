import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

export const Content = styled.div`
  padding-top: 15%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  margin-bottom: 50px;
`;

export const Item = styled.p`
  color: ${COLORS.black};
  font-size: 20px;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
`;

export const ExtraItem = styled.p`
  color: ${COLORS.black};
  font-size: 50px;
  letter-spacing: 1.5px;
`;
