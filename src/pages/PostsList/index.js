import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import dateFormat, { masks } from 'dateformat';

import { CreatePostForm } from '../../components/CreatePostForm';
import { Disclaimer } from '../../components/Disclaimer';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { fetchPosts, paginate } from '../../store/slices/posts';
import { Content, Extra, Item, Items, Post, Posts } from './style';
import { Paginator } from '../../components/Paginator';

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

  const reduxData = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    posts: state.posts.pagination.data,
    pageCount: state.posts.pagination.totalPages,
    isLoading: state.ui.isLoading,
  }));

  const { posts, pageCount } = reduxData;

  const renderPosts = () => {
    return posts.map((post) => {
      const formatTime = (time) => {
        if (time) {
          masks.formatTime = 'dd.mm.yyyy';
          return dateFormat(time, 'formatTime');
        }
        return 'no time';
      };

      const formatCreatedAt = formatTime(post.createdAt);
      const formatUpdatedAt = formatTime(post.updatedAt);

      return (
        <Posts key={post.id}>
          <Post>
            <Link to={`/posts/${post.id}`}>
              <Extra>{post.title}</Extra>
            </Link>
            <Items>
              <Item>Created: {formatCreatedAt}</Item>
              <Item>Updated: {formatUpdatedAt}</Item>
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
