import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Button, Error } from "../../globalStyles";
import { Content, Form } from "../../pages/EditPostForm/style";
import { editOwnComment } from "../../store/slices/comments";

export const EditCommentForm = () => {

    const {
        register,
        resetField,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        mode: 'onChange'
    });

    const dispatch = useDispatch();
    let params = useParams()

    const reduxData = useSelector((state) => ({
        initComment: state.comments.list
    }))

    const formHandler = (editedData) => {
        editedData.updatedAt = new Date().toISOString();
        editedData.createdAt = reduxData.initPost.createdAt;
        editedData.userId = reduxData.initPost.userId;
        editedData.id = reduxData.initPost.id;
        editedData.postId = params.id;
    }

    const [body, setBody] = useState(`${reduxData.initComment.body}`)

    return (
        <Content>
            <Form
                aria-autocomplete="off"
                onSubmit={handleSubmit((editedData) => {
                    formHandler(editedData);
                    resetField("body")
                    dispatch(editOwnComment(editedData));
                    navigate(`/posts/${params.id}`)
                })}
            >

                <ReactTextareaAutosize {...register("body", {
                    required: "Post content is required",
                    minLength: {
                        value: 10,
                        message: 'Post content must be at least 10 characters long'
                    }
                })}
                    value={body}
                    onChange={event => setBody(event.target.value)}
                    type="text"
                    minRows={4}
                    style={{ fontSize: '20px', outline: 'none', resize: 'none', borderRadius: '10% 90% 10% 90% / 90% 10% 90% 10% ', padding: '35px 55px' }}
                />
                <Error>{errors.body?.message}</Error>

                <Button type="submit" disabled={!isValid}>Edit comment</Button>
            </Form>
        </Content>
    );
}