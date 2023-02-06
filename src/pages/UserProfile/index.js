import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { avatarsArray } from '../../components/Avatar/avatars';
import { OptionsButton } from '../../globalStyles/buttons.style';
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

  const userAvId = userInfo.avatar;

  const findAvatarSrc = () => {
    if (userAvId === undefined) {
      return null;
    }
    const response = avatarsArray.find((avatar) => avatar.id === +userAvId);
    return response.img;
  };

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
