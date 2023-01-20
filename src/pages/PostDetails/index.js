import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PostComments } from '../../components/PostComments';
import { EditDeleteOptions } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { fetchPostDetails } from '../../store/slices/postDetails';
import { deleteOwnPost } from '../../store/slices/posts';
import { Post, Text } from './style';

export const PostDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <Post>
        <Title>{details.title}</Title>
        <Text>{details.body}</Text>

        {isUserPost && (
          <>
            <EditDeleteOptions
              onClick={() => {
                dispatch(deleteOwnPost(details.id));
                navigate('/posts');
              }}
            >
              Delete
            </EditDeleteOptions>
            <Link to={`/posts/edit/${details.id}`}>
              <EditDeleteOptions>Edit</EditDeleteOptions>
            </Link>
          </>
        )}
      </Post>
      <PostComments />
    </Container>
  );
};
