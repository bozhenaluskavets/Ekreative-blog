import styled from 'styled-components';

export const Button = styled.button`
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  padding: 10px 27px;
  cursor: pointer;
  transition: 0.3s;
  border: transparent;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 81% 19% 66% 34% / 35% 24% 76% 65%;

  :disabled {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 22% 78% 23% 47% / 37% 20% 80% 63%;
  }
`;

export const OBcentering = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px 0 0;
`;

export const OptionsButton = styled.button`
  font-size: 18px;
  margin: 4px 0 20px 0;
  color: rgba(255, 255, 255, 1);
  padding: 4px 10px;
  border: transparent;
  color: rgba(0, 0, 0, 1);
  border-radius: 88% 12% 76% 24% / 30% 30% 70% 70%;
  background-color: rgb(244, 244, 244);
  transition: 0.3s;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    border-radius: 21% 79% 70% 30% / 68% 9% 91% 32%;
    background-color: rgb(234, 234, 234);
  }
`;

export const EditDeleteOptions = styled.p`
  font-size: 15px;
  position: absolute;
  right: 0;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: 0.3s;
  margin-left: 15px;
  :hover {
    color: rgba(101, 101, 101, 1);
  }
  :last-child {
    right: 60px;
  }
`;
