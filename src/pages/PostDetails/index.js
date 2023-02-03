import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { PostComments } from '../../components/comments/PostComments';
import { Modal } from '../../components/Modal';
import { EditDeleteOptions } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { fetchPostDetails } from '../../store/slices/postDetails';
import { deleteOwnPost } from '../../store/slices/posts';
import { Post, Text, Content } from './style';

export const PostDetails = () => {
  const [isShownModal, setIsShownModal] = useState(false);

  const show = () => {
    setIsShownModal(true);
  };

  const hide = () => {
    setIsShownModal(false);
  };

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

  const isUserPost = details.userId === reduxData.userId;

  return (
    <Container>
      <Content>
        <Post>
          <Title>{details.title}</Title>
          <Text>{details.body}</Text>

          {isUserPost && (
            <>
              {!isShownModal && (
                <EditDeleteOptions
                  onClick={() => {
                    show();
                  }}
                >
                  Delete
                </EditDeleteOptions>
              )}
              {isShownModal && (
                <Modal
                  onClose={hide}
                  title={'Delete post'}
                  message={'Current changes will not be refunded'}
                  dispatchFunc={deleteOwnPost}
                  id={details.id}
                  route={'/posts'}
                />
              )}
              <Link to={`/posts/edit/${details.id}`}>
                <EditDeleteOptions>Edit</EditDeleteOptions>
              </Link>
            </>
          )}
        </Post>
        <PostComments />
      </Content>
    </Container>
  );
};
