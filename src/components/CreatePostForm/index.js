import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Button, Error } from "../../globalStyles";
import { createNewPost } from "../../store/slices/posts";
import { Content, Form, Input } from "./style";

export const CreatePostForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        mode: 'onChange'
    });

    const dispatch = useDispatch();

    const formHandler = (data) => {
        const date = new Date().toISOString();
        data.createdAt = date;
        data.updatedAt = date;
    }

    return (
        <Content>
            <Form
                aria-autocomplete="off"
                onSubmit={handleSubmit((data) => {
                    formHandler(data);
                    dispatch(createNewPost(data));
                })}
            >
                <Input {...register("title", {
                    required: "Title is required",
                    minLength: {
                        value: 3,
                        message: 'Title must be at least 3 characters long'
                    }
                })}
                    placeholder="Title"
                    type="text"
                />
                <Error>{errors.title?.message}</Error>

                <ReactTextareaAutosize {...register("body", {
                    required: "Post content is required",
                    minLength: {
                        value: 10,
                        message: 'Post content must be at least 10 characters long'
                    }
                })}
                    placeholder="Post content"
                    type="text"
                    minRows={4}
                    style={{ fontSize: '20px', outline: 'none', resize: 'none', borderRadius: '10% 90% 10% 90% / 90% 10% 90% 10% ', padding: '35px 55px' }}
                />
                <Error>{errors.body?.message}</Error>

                <Button type="submit" disabled={!isValid}>Add post</Button>
            </Form>
        </Content>
    );
}