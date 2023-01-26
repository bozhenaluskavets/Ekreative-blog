import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EditDeleteOptions, OptionsButton } from '../../globalStyles/buttons.style';
import { deleteOwnComment } from '../../store/slices/postDetails';
import { Comment, Comments, Container, Options } from '../comments/Comment/style';
import { EditCommentForm } from '../comments/EditCommentForm';

/* eslint-disable react/prop-types */

export const PostComment = ({ comment }) => {
  const [isShown, setIsShown] = useState(false);

  const show = () => {
    setIsShown(true);
  };

  const hide = () => {
    setIsShown(false);
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
          {!isShown && <EditDeleteOptions onClick={show}>Edit</EditDeleteOptions>}
          {isShown && (
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
