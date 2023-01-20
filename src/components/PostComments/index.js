import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { Container, Centering } from './style';
import { Subtitle } from '../../pages/PostDetails/style';
import { PostComment } from '../Comment';
import { CreateCommentForm } from '../CreateCommentForm';
import { Disclaimer } from '../Disclaimer';

export const PostComments = () => {
  const [isShown, setIsShown] = useState(false);

  const show = () => {
    setIsShown(true);
  };

  const hide = () => {
    setIsShown(false);
  };

  const reduxData = useSelector((state) => ({
    isLoading: state.ui.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    comments: state.postDetails.data.comments,
  }));

  const notAuth = isShown && !reduxData.isAuthenticated;
  const isAuth = isShown && reduxData.isAuthenticated;

  if (reduxData.isLoading) {
    return;
  }

  const renderComments = () => {
    return reduxData.comments.map((comment) => {
      return (
        <Fragment key={comment.id}>
          <PostComment comment={comment} />
        </Fragment>
      );
    });
  };

  return (
    <Container>
      <Subtitle>Comments</Subtitle>
      {renderComments()}
      <Centering>
        {!isShown && <OptionsButton onClick={show}>Create comment</OptionsButton>}

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
            <CreateCommentForm />
            <OptionsButton onClick={hide}>Hide form</OptionsButton>
          </OBcentering>
        )}
      </Centering>
    </Container>
  );
};
