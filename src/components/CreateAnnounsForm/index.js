import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Button, Error } from "../../globalStyles";
import { createNewAnnouncement } from "../../store/slices/announcements";
import { Content, Form, Input } from "../CreatePostForm/style";

export const CreateAnnounsForm = () => {
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
                    dispatch(createNewAnnouncement(data));
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
                    required: "Announcement content is required",
                    minLength: {
                        value: 10,
                        message: 'Announcement content must be at least 10 characters long'
                    }
                })}
                    placeholder="Announcement content"
                    type="text"
                    minRows={3}
                    style={{ fontSize: '20px', outline: 'none', resize: 'none', borderRadius: '10% 90% 10% 90% / 90% 10% 90% 10% ', padding: '35px 55px' }}
                />
                <Error>{errors.body?.message}</Error>

                <Button type="submit" disabled={!isValid}>Add announcement</Button>
            </Form>
        </Content>
    );

}