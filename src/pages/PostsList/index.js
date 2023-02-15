import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Disclaimer } from '../../components/Disclaimer';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';

import { fetchPosts, paginate } from '../../store/slices/posts';
import { Content } from './style';
import { ListItem } from '../../components/ListItem';
import { CreatePostForm } from '../../components/createForms/CreatePostForm';
import { Paginator } from '../../components/Paginator';
import { useToggle } from '../../utilities/toggleController';
import { CreateOption } from '../../components/ButtonOptions';

export const PostsList = () => {
  const [isShown, toggle] = useToggle();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const reduxData = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    posts: state.posts.pagination.data,
    pageCount: state.posts.pagination.totalPages,
    isLoading: state.ui.isLoading,
  }));

  const { posts, pageCount, isAuthenticated } = reduxData;

  const postsComponent = posts.map((post) => {
    return (
      <Fragment key={post.id}>
        <ListItem data={post} route={'posts'} />
      </Fragment>
    );
  });

  if (reduxData.isLoading) {
    return;
  }

  const showDisclaimer = isShown && !isAuthenticated;
  const showForm = isShown && isAuthenticated;

  return (
    <Container>
      <Content>
        <Title>Posts</Title>
        {!isShown && (
          <OBcentering>
            <CreateOption onClick={toggle} item={'post'} />
          </OBcentering>
        )}

        {showDisclaimer && <Disclaimer toggle={toggle} />}

        {showForm && (
          <OBcentering>
            <CreatePostForm />
            <OptionsButton onClick={toggle}>Close form</OptionsButton>
          </OBcentering>
        )}
        {postsComponent}
        <Paginator
          pageCount={pageCount}
          handlePageClick={(event) => {
            dispatch(paginate(event.selected));
          }}
        />
      </Content>
    </Container>
  );
};
