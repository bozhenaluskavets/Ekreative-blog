import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { ListItem } from '../../components/ListItem';
import { fetchPosts } from '../../store/slices/posts';
import { filterUserItems } from '../../utilities/filterUserItems';
import { fetchAnnouncements } from '../../store/slices/announcements';
import { Announcements, NoItems, Posts, Content, Center } from './style';
import { OptionsButton } from '../UserProfile/style';
import { Back } from '../../globalStyles/buttons.style';

export const CurrentUserItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchAnnouncements());
  }, []);

  const reduxData = useSelector((state) => {
    const allPosts = state.posts.list;
    const allAnnouns = state.announcements.list;
    const userId = state?.auth?.userInfo?.id;
    let currentUserPosts = [];
    let currentUserAnnouns = [];

    if (userId) {
      currentUserPosts = filterUserItems(allPosts, userId);
      currentUserAnnouns = filterUserItems(allAnnouns, userId);
    }

    return { currentUserPosts, currentUserAnnouns };
  });
  const { currentUserPosts, currentUserAnnouns } = reduxData;

  const noPosts = !currentUserPosts.length;
  const noAnnouns = !currentUserAnnouns.length;

  return (
    <Container>
      <Content>
        <Title>My Posts</Title>
        <Posts>
          {noPosts && (
            <>
              <NoItems>You have not any posts yet</NoItems>
              <Link to={'/posts'}>
                <OptionsButton>Go to all posts</OptionsButton>
              </Link>
            </>
          )}

          {currentUserPosts.map((item) => {
            return <ListItem data={item} route={'posts'} key={item.id} />;
          })}
        </Posts>
        <Title>My Annoncements</Title>
        <Announcements>
          {noAnnouns && (
            <>
              <NoItems>You have not any announcements yet</NoItems>{' '}
              <Link to={'/announcements'}>
                <OptionsButton>Go to all announcements</OptionsButton>
              </Link>
            </>
          )}

          {currentUserAnnouns.map((item) => {
            return <ListItem data={item} route={'announcements'} key={item.id} />;
          })}
        </Announcements>
        <Center>
          <Link to={'/profile'}>
            <Back>Back to my profile</Back>
          </Link>
        </Center>
      </Content>
    </Container>
  );
};
