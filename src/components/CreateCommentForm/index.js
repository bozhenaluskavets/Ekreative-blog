import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Error } from "../../globalStyles";
import { fetchNewComments } from "../../store/slices/comments";
import { Content, Form } from "../CreatePostForm/style";
import ReactTextareaAutosize from "react-textarea-autosize";

export const CreateCommentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        mode: 'onChange'
    });

    const formHandler = (data) => {
        const date = new Date().toISOString();
        data.createdAt = date;
        data.updatedAt = date;
    }

    const dispatch = useDispatch();

    return (
        <Content>
            <Form
                aria-autocomplete="off"
                onSubmit={handleSubmit((data) => {
                    formHandler(data);
                    dispatch(fetchNewComments(data));
                })}
            >
                <ReactTextareaAutosize {...register("postText", {
                    required: "Comment content is required",
                    minLength: {
                        value: 3,
                        message: 'Comment must be at least 3 characters long'
                    }
                })}
                    placeholder="Comment content"
                    type="text"
                    minRows={2}
                    style={{ fontSize: '20px', outline: 'none', resize: 'none', borderRadius: '10% 90% 10% 90% / 90% 10% 90% 10% ', padding: '35px 55px' }}
                />
                <Error>{errors.comment?.message}</Error>

                <Button type="submit" disabled={!isValid}>Add comment</Button>
            </Form>
        </Content>
    );

}