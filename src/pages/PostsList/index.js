import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreatePostForm } from '../../components/CreatePostForm';
import { Disclaimer } from '../../components/Disclaimer';
import { Container, OBcentering, OptionsButton, Title } from '../../globalStyles';
import { fetchPosts } from '../../store/slices/posts';
import { Content, Extra, Item, Items, Post, Posts } from './style';

export const PostsList = () => {
  const [isShown, setIsShown] = useState(false);

  const show = () => {
    setIsShown(true);
  };

  const hide = () => {
    setIsShown(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const reduxData = useSelector((state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      list: state,
      isLoading: state.ui.isLoading,
    };
  });

  const renderPosts = () => {
    const posts = reduxData.list.posts.list;

    return posts.map((post) => {
      // const formatTime = () => {
      //     if (post.createdAt !== 'undefined') {
      //         let time = post.createdAt.substr(0, 10);
      //         return time
      //     }
      // }

      return (
        <Posts key={post.id}>
          <Post>
            <Link to={'/posts/' + post.id}>
              <Extra>{post.title}</Extra>
            </Link>
            <Items>
              <Item>Created: {post.createdAt}</Item>
              <Item>Updated: {post.updatedAt}</Item>
            </Items>
          </Post>
        </Posts>
      );
    });
  };

  if (reduxData.isLoading) {
    return;
  }

  return (
    <Container>
      <Content>
        <Title>Posts</Title>
        {!isShown && (
          <OBcentering>
            <OptionsButton onClick={show}>Create</OptionsButton>
          </OBcentering>
        )}

        {isShown && !reduxData.isAuthenticated && (
          <>
            <Disclaimer />
            <OBcentering>
              <OptionsButton onClick={hide}>OK</OptionsButton>
            </OBcentering>
          </>
        )}

        {isShown && reduxData.isAuthenticated && (
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
