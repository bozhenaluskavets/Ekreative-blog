import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo, logout } from '../../store/slices/auth';
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
  // UserInfo,
} from './style';

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
                  Log out
                </Link>
              </Item>
              <Item>
                <Link to={'/profile'}>
                  <User>
                    <Text>{reduxData.userInfo.firstname}</Text>
                    <Text>{reduxData.userInfo.lastname}</Text>
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
