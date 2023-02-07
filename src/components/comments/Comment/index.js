import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router';
import { Comment, Comments, Options } from './style';
import { EditDeleteOptions } from '../../../globalStyles/buttons.style';
import { deleteOwnComment } from '../../../store/slices/postDetails';
import { Modal } from '../../Modal';
import { CommentModal } from '../EditCommentModal';

export const PostComment = ({ comment }) => {
  const [isShownEModal, setisShownEModal] = useState(false);
  const [isShownDModal, setIsShownDModal] = useState(false);

  const showDModal = () => {
    setIsShownDModal(true);
  };

  const hideDModal = () => {
    setIsShownDModal(false);
  };

  const showEModal = () => {
    setisShownEModal(true);
  };

  const hideEModal = () => {
    setisShownEModal(false);
  };

  const params = useParams();

  const reduxData = useSelector((state) => ({
    userInfo: state.auth.userInfo,
  }));

  const isUserComment = comment.userId === reduxData.userInfo.id;

  return (
    <Comments key={comment.id}>
      <Comment>{comment.body}</Comment>
      {isUserComment && (
        <Options>
          {!isShownDModal && (
            <EditDeleteOptions
              onClick={() => {
                showDModal();
              }}
            >
              Delete
            </EditDeleteOptions>
          )}
          {isShownDModal && (
            <Modal
              onClose={hideDModal}
              title={'Delete comment'}
              message={'Current changes will not be refunded'}
              dispatchFunc={deleteOwnComment}
              id={comment.id}
              route={`/posts/${params.id}`}
            />
          )}
          {!isShownEModal && (
            <EditDeleteOptions
              onClick={() => {
                showEModal();
              }}
            >
              Edit
            </EditDeleteOptions>
          )}
          {isShownEModal && (
            <CommentModal
              onClose={hideEModal}
              title={'Edit comment'}
              action={'Edit'}
              comment={comment}
            />
          )}
        </Options>
      )}
    </Comments>
  );
};
// fix onClick / onClick={showEModal} is enough
