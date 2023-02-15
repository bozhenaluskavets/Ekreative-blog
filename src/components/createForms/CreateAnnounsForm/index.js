import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../globalStyles/buttons.style';
import { createNewAnnouncement } from '../../../store/slices/announcements';
import { Content, Form } from '../CreatePostForm/style';
import { InputComponent } from '../../Input';
import { TextAreaComponent } from '../../TextArea';

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

  const dataToSubmit = (data) => {
    const date = new Date().toISOString();
    const userId = reduxData.userInfo.id;
    data.createdAt = date;
    data.updatedAt = date;
    data.userId = userId;
  };

  const onSubmit = (data) => {
    dataToSubmit(data);
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

        <TextAreaComponent
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
          error={errors.body?.message}
        />

        <Button type="submit" disabled={!isValid}>
          Add announcement
        </Button>
      </Form>
    </Content>
  );
};
