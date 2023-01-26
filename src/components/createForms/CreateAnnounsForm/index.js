import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '../../../globalStyles/buttons.style';
import { Error } from '../../../globalStyles/forms.style';
import { createNewAnnouncement } from '../../../store/slices/announcements';
import { Content, Form } from '../CreatePostForm/style';
import '../../../globalStyles/textarea.css';
import { InputComponent } from '../../Input';

export const CreateAnnounsForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const reduxData = useSelector((state) => ({
    userInfo: state.auth.userInfo,
  }));

  const formHandler = (data) => {
    const date = new Date().toISOString();
    const userId = reduxData.userInfo.id;
    data.createdAt = date;
    data.updatedAt = date;
    data.userId = userId;
  };

  const onSubmit = (data) => {
    formHandler(data);
    dispatch(createNewAnnouncement(data));
    reset();
  };

  return (
    <Content>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters long',
            },
          })}
          placeholder="Title"
          type="text"
          error={errors.title?.message}
        />

        <ReactTextareaAutosize
          {...register('body', {
            required: 'Announcement content is required',
            minLength: {
              value: 10,
              message: 'Announcement content must be at least 10 characters long',
            },
          })}
          placeholder="Announcement content"
          type="text"
          minRows={3}
          className="styleTextarea"
        />
        <Error>{errors.body?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Add announcement
        </Button>
      </Form>
    </Content>
  );
};
