import styled from 'styled-components';

export const Input = styled.input`
  color: rgb(0, 0, 0);
  font-size: 20px;
  padding: 10px 27px;
  cursor: pointer;
  margin-bottom: 10px;
  border: solid 1px rgba(0, 0, 0, 0.6);
  border-radius: 22% 78% 53% 77% / 87% 40% 80% 43%;
  outline: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const EditInput = styled.input`
  padding: 15px 55px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  border: solid 1px rgba(0, 0, 0, 0.6);
  border-radius: 22% 78% 53% 77% / 87% 40% 80% 43%;
  outline: none;
`;

export const Error = styled.p`
  color: rgb(186, 0, 0);
  font-size: 15px;
  padding: 0 0 20px;
  text-align: left;
`;
