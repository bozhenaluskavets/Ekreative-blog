import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { PostComments } from '../../components/comments/PostComments';
import { DeleteOption, EditOption } from '../../components/ButtonOptions';
import { Modal } from '../../components/Modal';
import { UserLabel } from '../../components/UserLabel';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { fetchPostDetails } from '../../store/slices/postDetails';
import { deleteOwnPost } from '../../store/slices/posts';
import { formatTime } from '../../utilities/formatTime';
import { useToggle } from '../../utilities/toggleController';
import { Post, Text, Content, PostContent, Time, Details, Options } from './style';

export const PostDetails = () => {
  const [isShown, toggle] = useToggle();

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchPostDetails(params.id));
  }, []);

  const reduxData = useSelector((state) => ({
    data: state.postDetails.data,
    isLoading: state.ui.isLoading,
    userId: state.auth.userInfo.id,
  }));

  const details = reduxData.data;

  if (reduxData.isLoading) {
    return;
  }

  const formatCreatedAt = formatTime(details.createdAt);

  const isUserPost = details.userId === reduxData.userId;

  return (
    <Container>
      <Content>
        <Post>
          {details.user && <UserLabel data={details} />}
          <PostContent>
            <Title>{details.title}</Title>
            <Text>{details.body}</Text>
            <Details>
              <Time>{formatCreatedAt}</Time>
              {isUserPost && (
                <Options>
                  {!isShown && <DeleteOption onClick={toggle} />}
                  {isShown && (
                    <Modal
                      onClose={toggle}
                      title={'Delete post'}
                      message={'Current changes will not be refunded'}
                      dispatchFunc={deleteOwnPost}
                      id={details.id}
                      route={'/posts'}
                    />
                  )}
                  <Link to={`/posts/edit/${details.id}`}>
                    <EditOption />
                  </Link>
                </Options>
              )}
            </Details>
          </PostContent>
        </Post>
        <PostComments />
      </Content>
    </Container>
  );
};
