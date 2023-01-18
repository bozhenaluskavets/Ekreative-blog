import { useSelector } from 'react-redux';
import { Container } from '../../globalStyles';
import { Content, ExtraItem, Item, Name, UserInfo } from './style';

export const UserProfile = () => {
  const reduxData = useSelector((state) => {
    return {
      userInfo: state.auth.userInfo,
    };
  });

  const user = reduxData.userInfo;

  return (
    <Container>
      <Content>
        <UserInfo key={user.id}>
          <Name>
            <ExtraItem>{user.firstname}</ExtraItem>
            <ExtraItem>{user.lastname}</ExtraItem>
          </Name>
          <Item>Email: {user.email}</Item>
          <Item>Age: {user.age}</Item>
        </UserInfo>
      </Content>
    </Container>
  );
};
