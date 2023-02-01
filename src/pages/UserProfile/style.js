import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

export const Content = styled.div`
  padding-top: 15%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const General = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  object-fit: cover;
  background-color: aliceblue;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 30px 30px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Name = styled.div`
  margin-bottom: 30px;
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
