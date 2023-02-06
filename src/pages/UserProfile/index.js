import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { OptionsButton } from '../../globalStyles/buttons.style';
import { findAvatarSrc } from '../../utilities/findAvatar';
import {
  Avatar,
  Content,
  Container,
  ExtraItem,
  Item,
  Name,
  UserInfo,
  General,
  Margin,
} from './style';

export const UserProfile = () => {
  const { userInfo } = useSelector((state) => {
    return { userInfo: state.auth.userInfo };
  });

  const img = findAvatarSrc();

  return (
    <Container>
      <Content>
        <UserInfo key={userInfo.id}>
          <Avatar src={img} alt="avatar" />
          <General>
            <Name>
              <ExtraItem>{userInfo.firstname}</ExtraItem>
              <ExtraItem>{userInfo.lastname}</ExtraItem>
            </Name>
            <Item>Email: {userInfo.email}</Item>
            <Item>Age: {userInfo.age}</Item>
            <Margin>
              <Link to={`/profile/edit/${userInfo.id}`}>
                <OptionsButton>Edit my profile info</OptionsButton>
              </Link>
            </Margin>
          </General>
        </UserInfo>
      </Content>
    </Container>
  );
};
