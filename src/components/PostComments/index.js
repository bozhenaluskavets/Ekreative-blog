import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { OptionsButton } from '../../globalStyles';
import { deleteOwnComment, fetchComments } from '../../store/slices/comments';
import { EditCommentForm } from '../EditCommentForm';
// import { OptionsButton } from "../../globalStyles";
// import { deleteOwnComment } from "../../store/slices/comments";
import { Comment, CommentOptions } from './style';

export const PostsComments = () => {
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(fetchComments(params.id));
  }, []);

  const reduxData = useSelector((state) => ({
    list: state,
    isLoading: state.ui.isLoading,
    userId: state.auth.userInfo.id,
  }));

  const comments = reduxData.list.comments.list;

  if (reduxData.isLoading) {
    return;
  }

  return comments.map((comment) => {
    return (
      <Comment key={comment.id}>
        {comment.body}
        {comment.userId == reduxData.userId && (
          <>
            <CommentOptions
              onClick={() => {
                dispatch(deleteOwnComment(comment.id));
                location.reload();
              }}
            >
              Delete comment
            </CommentOptions>
          </>
        )}
      </Comment>
    );
  });
};
