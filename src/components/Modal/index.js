import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Container, Content, Message, Options, Option, Title, Warning } from './style';

export const Modal = ({ title, message, onClose, dispatchFunc, id, route }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Message>
          <Title>{title}</Title>
          <Warning>{message}</Warning>
          <Options>
            <Option onClick={onClose}>No</Option>
            <Option
              onClick={() => {
                dispatch(dispatchFunc(id));
                navigate(`${route}`);
              }}
            >
              Yes
            </Option>
          </Options>
        </Message>
      </Content>
    </Container>
  );
};
