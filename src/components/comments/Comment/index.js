import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router';
import { Comment, Comments, Container, Options } from './style';
import { EditDeleteOptions, OptionsButton } from '../../../globalStyles/buttons.style';
import { deleteOwnComment } from '../../../store/slices/postDetails';
import { EditCommentForm } from '../EditCommentForm';
import { Modal } from '../../Modal';

/* eslint-disable react/prop-types */

export const PostComment = ({ comment }) => {
  const [isShownEditForm, setisShownEditForm] = useState(false);
  const [isShownModal, setIsShownModal] = useState(false);

  const showModal = () => {
    setIsShownModal(true);
  };

  const hideModal = () => {
    setIsShownModal(false);
  };

  const showEditForm = () => {
    setisShownEditForm(true);
  };

  const hideEditForm = () => {
    setisShownEditForm(false);
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
          {!isShownModal && (
            <EditDeleteOptions
              onClick={() => {
                showModal();
              }}
            >
              Delete
            </EditDeleteOptions>
          )}
          {isShownModal && (
            <Modal
              onClose={hideModal}
              item={'comment'}
              dispatchFunc={deleteOwnComment}
              id={comment.id}
              route={`/posts/${params.id}`}
            />
          )}
          {!isShownEditForm && <EditDeleteOptions onClick={showEditForm}>Edit</EditDeleteOptions>}
          {isShownEditForm && (
            <Container>
              <EditCommentForm comment={comment} onClose={hideEditForm} />
              <OptionsButton onClick={hideEditForm}>Hide form</OptionsButton>
            </Container>
          )}
        </Options>
      )}
    </Comments>
  );
};
