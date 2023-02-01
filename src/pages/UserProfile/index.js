import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { avatarsArray } from '../../components/Avatar/avatars';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { Container } from '../../globalStyles/multiComponents.style';
import { Avatar, Content, ExtraItem, Item, Name, UserInfo, General } from './style';

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
          <General>
            <Avatar src={img} alt="avatar" />
            <Name>
              <ExtraItem>{userInfo.firstname}</ExtraItem>
              <ExtraItem>{userInfo.lastname}</ExtraItem>
            </Name>
          </General>
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
