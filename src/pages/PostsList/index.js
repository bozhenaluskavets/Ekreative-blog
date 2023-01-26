import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Disclaimer } from '../../components/Disclaimer';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { fetchPosts } from '../../store/slices/posts';
import { Content } from './style';
import { ListItem } from '../../components/ListItem';
import { CreatePostForm } from '../../components/createForms/CreatePostForm';

export const PostsList = () => {
  const [isShownCreateForm, setIsShownCreateForm] = useState(false);

  const show = () => {
    setIsShownCreateForm(true);
  };

  const hide = () => {
    setIsShownCreateForm(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const reduxData = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    posts: state.posts.list,
    isLoading: state.ui.isLoading,
  }));

  const renderPosts = () => {
    return reduxData.posts.map((post) => {
      return (
        <Fragment key={post.id}>
          <ListItem data={post} route={'posts'} />
        </Fragment>
      );
    });
  };

  if (reduxData.isLoading) {
    return;
  }

  const notAuth = isShownCreateForm && !reduxData.isAuthenticated;
  const isAuth = isShownCreateForm && reduxData.isAuthenticated;

  return (
    <Container>
      <Content>
        <Title>Posts</Title>
        {!isShownCreateForm && (
          <OBcentering>
            <OptionsButton onClick={show}>Create</OptionsButton>
          </OBcentering>
        )}

        {notAuth && (
          <>
            <Disclaimer />
            <OBcentering>
              <OptionsButton onClick={hide}>OK</OptionsButton>
            </OBcentering>
          </>
        )}

        {isAuth && (
          <OBcentering>
            <CreatePostForm />
            <OptionsButton onClick={hide}>Hide form</OptionsButton>
          </OBcentering>
        )}
        {renderPosts()}
      </Content>
    </Container>
  );
};
