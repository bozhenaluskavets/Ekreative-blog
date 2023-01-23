import styled from 'styled-components';

export const Content = styled.div`
  margin-left: 15%;
  margin-top: 100px;
`;

export const InvitationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 80px;
  max-width: 500px;
  letter-spacing: 3px;
  margin-top: 7%;
`;

export const Image = styled.img`
  right: 0;
  overflow: hidden;
  object-fit: cover;
`;

export const StartDetails = styled.div`
  display: flex;
  margin-top: 5%;
`;

export const Text = styled.p`
  font-size: 25px;
  max-width: 370px;
  line-height: 2;
  margin-right: 40px;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2;
`;

export const Item = styled.p`
  font-size: 25px;
  margin: 0 0 20px 40px;
  border-radius: 88% 12% 76% 24% / 30% 30% 70% 70%;
  background-color: rgb(244, 244, 244);
  transition: 0.3s;
  cursor: pointer;
  :hover {
    border-radius: 21% 79% 70% 30% / 68% 9% 91% 32%;
    background-color: rgb(234, 234, 234);
  }
`;
