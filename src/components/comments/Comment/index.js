import { useSelector } from 'react-redux';

import { useParams } from 'react-router';
import { Comment, Comments, Options } from './style';
import { deleteOwnComment } from '../../../store/slices/postDetails';
import { Modal } from '../../Modal';
import { CommentModal } from '../EditCommentModal';
import { CommentUserLabel } from '../../UserLabel';
import { useToggle } from '../../../utilities/toggleController';
import { DeleteOption, EditOption } from '../../ButtonOptions';

export const PostComment = ({ comment }) => {
  const [isShownE, toggleE] = useToggle();
  const [isShownD, toggleD] = useToggle();

  const params = useParams();

  const reduxData = useSelector((state) => ({
    userInfo: state.auth.userInfo,
  }));

  const isUserComment = comment.userId === reduxData.userInfo.id;

  return (
    <Comments key={comment.id}>
      <Comment>
        {comment.user && <CommentUserLabel data={comment} />}
        {comment.body}
      </Comment>
      {isUserComment && (
        <Options>
          {!isShownD && <DeleteOption onClick={toggleD} />}
          {isShownD && (
            <Modal
              onClose={toggleD}
              title={'Delete comment'}
              message={'Current changes will not be refunded'}
              dispatchFunc={deleteOwnComment}
              id={comment.id}
              route={`/posts/${params.id}`}
            />
          )}
          {!isShownE && <EditOption onClick={toggleE} />}
          {isShownE && (
            <CommentModal
              onClose={toggleE}
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
