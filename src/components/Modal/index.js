import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Container, Content, Message, Options, Option, Title, Warning } from './style';

export const Modal = ({ item, onClose, dispatchFunc, id, route }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Message>
          <Title>Delete {item}</Title>
          <Warning>Current changes will not be refunded</Warning>
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
