import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 30px auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Avatars = styled.img`
  width: 150px;
  height: 150px;
  margin: 15px;
  object-fit: cover;
  border-radius: 50%;
  transition: 0.3s;
  z-index: 1000;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const AvatarBlock = styled.label`
  width: 25%;
`;

export const Input = styled.input`
  margin: 0px 86px;
`;
