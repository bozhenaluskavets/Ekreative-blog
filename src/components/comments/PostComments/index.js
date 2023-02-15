import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { OBcentering, OptionsButton } from '../../../globalStyles/buttons.style';
import { Container, Centering } from './style';
import { Subtitle } from '../../../pages/PostDetails/style';
import { PostComment } from '../Comment';
import { Disclaimer } from '../../Disclaimer';
import { CreateCommentForm } from '../../createForms/CreateCommentForm';
import { useToggle } from '../../../utilities/toggleController';

export const PostComments = () => {
  const [isShown, toggle] = useToggle();

  const reduxData = useSelector((state) => ({
    isLoading: state.ui.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    comments: state.postDetails.data.comments,
  }));

  const showDisclaimer = isShown && !reduxData.isAuthenticated;
  const showForm = isShown && reduxData.isAuthenticated;

  if (reduxData.isLoading) {
    return;
  }

  const commentsComponent = reduxData.comments.map((comment) => {
    return (
      <Fragment key={comment.id}>
        <PostComment comment={comment} />
      </Fragment>
    );
  });

  return (
    <Container>
      <Subtitle>Comments</Subtitle>
      {commentsComponent}
      <Centering>
        {!isShown && <OptionsButton onClick={toggle}>Create comment</OptionsButton>}

        {showDisclaimer && <Disclaimer toggle={toggle} />}

        {showForm && (
          <OBcentering>
            <CreateCommentForm />
            <OptionsButton onClick={toggle}>Close form</OptionsButton>
          </OBcentering>
        )}
      </Centering>
    </Container>
  );
};
