import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Comment, Comments, Container, Options } from './style';
import { EditDeleteOptions, OptionsButton } from '../../globalStyles/buttons.style';
import { deleteOwnComment } from '../../store/slices/postDetails';
import { EditCommentForm } from '../EditCommentForm';

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

// export const PostComment = () => {
//   const [isShown, setIsShown] = useState(false);

//   const show = () => {
//     setIsShown(true);
//   };

//   const hide = () => {
//     setIsShown(false);
//   };

//   const dispatch = useDispatch();

//   const reduxData = useSelector((state) => ({
//     comments: state.postDetails,
//     userId: state.auth.userInfo.id,
//   }));

//   const comments = reduxData.list.comments.list;
//   console.log('comments => ', comments);

//   // useEffect(() => {
//   //   dispatch(fetchComments(params.id));
//   // }, []);

//   return comments.map((comment) => {
//     const isUserComment = comment.userId === reduxData.userId;
//     return (
//       <Comments key={comment.id}>
//         <Comment>{comment.body}</Comment>
//         {isUserComment && (
//           <Options>
//             <CommentOptions
//               onClick={() => {
//                 dispatch(deleteOwnComment(comment.id));
//                 location.reload();
//               }}
//             >
//               Delete
//             </CommentOptions>
//             {!isShown && (
//               <CommentOptions
//                 onClick={() => {
//                   show();
//                 }}
//               >
//                 Edit
//               </CommentOptions>
//             )}
//             {isShown && (
//               <>
//                 <EditCommentForm />
//                 <OptionsButton onClick={hide}>Hide form</OptionsButton>
//               </>
//             )}
//           </Options>
//         )}
//       </Comments>
//     );
//   });
// };
