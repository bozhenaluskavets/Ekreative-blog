import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container } from '../../globalStyles/multiComponents.style';
import { findAvatarSrc } from '../../utilities/findAvatar';
import { Avatar, ExtraItem, Item, Name, UserInfo, General, Margin, OptionsButton } from './style';

export const UserProfile = () => {
  const { userInfo, isLoading } = useSelector((state) => {
    return { userInfo: state.auth.userInfo, isLoading: state.ui.isLoading };
  });

  if (isLoading) {
    return;
  }
  const img = findAvatarSrc(userInfo);

  return (
    <Container>
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
              <OptionsButton>
                Edit my profile info <CreateIcon />
              </OptionsButton>
            </Link>
            <Link to={`/profile/changePassword/${userInfo.id}`}>
              <OptionsButton>
                Change password <LockIcon />
              </OptionsButton>
            </Link>
            <Link to={'/posts/myItems'}>
              <OptionsButton>
                My posts & announcements <AccountCircleIcon />
              </OptionsButton>
            </Link>
          </Margin>
        </General>
      </UserInfo>
    </Container>
  );
};
