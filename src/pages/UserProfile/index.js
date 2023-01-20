import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { Container } from '../../globalStyles/multiComponents.style';
import { Content, ExtraItem, Item, Name, UserInfo } from './style';

export const UserProfile = () => {
  const { userInfo } = useSelector((state) => {
    return { userInfo: state.auth.userInfo };
  });

  return (
    <Container>
      <Content>
        <UserInfo key={userInfo.id}>
          <Name>
            <ExtraItem>{userInfo.firstname}</ExtraItem>
            <ExtraItem>{userInfo.lastname}</ExtraItem>
          </Name>
          <Item>Email: {userInfo.email}</Item>
          <Item>Age: {userInfo.age}</Item>
        </UserInfo>
        <OBcentering>
          <Link to={`/profile/edit/${userInfo.id}`}>
            <OptionsButton>Edit</OptionsButton>
          </Link>
        </OBcentering>
      </Content>
    </Container>
  );
};
