import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { getUserInfo, logout } from '../../store/slices/auth';
import { findAvatarSrc } from '../../utilities/findAvatar';
import { textAbstract } from '../../utilities/textAbstract';
import { Loader } from '../Loader';
import {
  Container,
  Extra,
  ExtraContainer,
  ExtraItems,
  Item,
  Items,
  Nav,
  Text,
  User,
  Icon,
  Logout,
} from './style';
import { Avatar } from '../../globalStyles/multiComponents.style';

export const Header = () => {
  const dispatch = useDispatch();

  const reduxData = useSelector((state) => ({
    isLoading: state.ui.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    userInfo: state.auth.userInfo,
  }));
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const clearLS = () => {
    dispatch(logout());
  };

  const userName = () => {
    if (reduxData.userInfo.firstname !== undefined && reduxData.userInfo.lastname !== undefined) {
      const userName = `${reduxData.userInfo.firstname} ${reduxData.userInfo.lastname}`;
      const abstractUserName = textAbstract(userName, 13);
      return abstractUserName;
    }

    return '';
  };

  const img = findAvatarSrc(reduxData.userInfo);

  return (
    <Container>
      <Nav>
        <Extra>
          <Link to={'/'}>Home</Link>
        </Extra>

        <ExtraContainer>
          <ExtraItems>
            <Item>
              <Link to={'/posts'}>Posts</Link>
            </Item>
            <Item>
              <Link to={'/announcements'}>Announcements</Link>
            </Item>
          </ExtraItems>

          {!reduxData.isAuthenticated && (
            <Items>
              <Item>
                <Link to={'/register'}>Register</Link>
              </Item>
              <Item>
                <Link to={'/login'}>Log in</Link>
              </Item>
            </Items>
          )}

          {reduxData.isAuthenticated && (
            <Items>
              <Item>
                <Link to={'/'} onClick={clearLS}>
                  <Logout>
                    Log out
                    <Icon>
                      <LogoutIcon fontSize="small" />
                    </Icon>
                  </Logout>
                </Link>
              </Item>
              <Item>
                <Link to={'/profile'}>
                  <User>
                    <Text>{userName()}</Text>
                    <Avatar src={img} alt="avatar" />
                  </User>
                </Link>
              </Item>
            </Items>
          )}
        </ExtraContainer>
      </Nav>
      {reduxData.isLoading && <Loader />}
    </Container>
  );
};
