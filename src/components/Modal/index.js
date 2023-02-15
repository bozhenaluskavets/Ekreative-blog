import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Container, Content, Message, Options, Option, Title, Warning } from './style';

export const Modal = ({ title, message, onClose, dispatchFunc, id, route }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = () => {
    dispatch(dispatchFunc(id));
    navigate(`${route}`);
  };

  return (
    <Container>
      <Content>
        <Message>
          <Title>{title}</Title>
          <Warning>{message}</Warning>
          <Options>
            <Option onClick={onClose}>No</Option>
            <Option onClick={deleteHandler}>Yes</Option>
          </Options>
        </Message>
      </Content>
    </Container>
  );
};
