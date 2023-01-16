import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteOwnComment, fetchComments } from "../../store/slices/comments";
import { Comment, DeleteButton } from "./style";

export const PostsComments = () => {

    const dispatch = useDispatch();
    let params = useParams();

    useEffect(() => {
        dispatch(fetchComments(params.id))
    }, [])

    const reduxData = useSelector((state) => {
        return {
            list: state,
            isLoading: state.ui.isLoading,
            userId: state.auth.userInfo.id
        }
    })

    const comments = reduxData.list.comments.list;

    if (reduxData.isLoading) {
        return
    }

    return comments.map((comment) => {
        return (
            <Comment key={comment.id}>
                {comment.body}
                {(comment.userId == reduxData.userId) && (
                    <DeleteButton onClick={() => {
                        dispatch(deleteOwnComment(comment.id));
                        location.reload();
                    }}>Delete comment</DeleteButton>
                )}
            </Comment>
        )
    })
}