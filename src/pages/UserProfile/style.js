import styled from 'styled-components';
import { COLORS } from '../../globalStyles/colors';

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding-top: 15vh;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const General = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 25%;
  height: fit-content;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Name = styled.div`
  margin-bottom: 30px;
`;

export const Item = styled.p`
  color: ${COLORS.black};
  font-size: 25px;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
`;

export const ExtraItem = styled.p`
  color: ${COLORS.black};
  font-size: 60px;
  letter-spacing: 1.5px;
`;

export const Margin = styled.div`
  margin: 30px 0 0 -10px;
`;
