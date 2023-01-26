import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Comment, Comments, Container, Options } from './style';
import { EditDeleteOptions, OptionsButton } from '../../../globalStyles/buttons.style';
import { deleteOwnComment } from '../../../store/slices/postDetails';
import { EditCommentForm } from '../EditCommentForm';

export const PostComment = ({ comment }) => {
  const [isShownEditForm, setisShownEditForm] = useState(false);

  const show = () => {
    setisShownEditForm(true);
  };

  const hide = () => {
    setisShownEditForm(false);
  };
  const dispatch = useDispatch();

  const reduxData = useSelector((state) => ({
    userInfo: state.auth.userInfo,
  }));

  const isUserComment = comment.userId === reduxData.userInfo.id;

  return (
    <Comments key={comment.id}>
      <Comment>{comment.body}</Comment>
      {isUserComment && (
        <Options>
          <EditDeleteOptions
            onClick={() => {
              dispatch(deleteOwnComment(comment.id));
              window.location.reload();
            }}
          >
            Delete
          </EditDeleteOptions>
          {!isShownEditForm && <EditDeleteOptions onClick={show}>Edit</EditDeleteOptions>}
          {isShownEditForm && (
            <Container>
              <EditCommentForm comment={comment} />
              <OptionsButton onClick={hide}>Hide form</OptionsButton>
            </Container>
          )}
        </Options>
      )}
    </Comments>
  );
};
