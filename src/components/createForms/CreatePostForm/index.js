import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../globalStyles/buttons.style';
import { createNewPost } from '../../../store/slices/posts';
import { Content, Form } from './style';
import { InputComponent } from '../../Input';
import { TextAreaComponent } from '../../TextArea';

export const CreatePostForm = () => {
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
    dispatch(createNewPost(data));
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
            required: 'Post content is required',
            minLength: {
              value: 10,
              message: 'Post content must be at least 10 characters long',
            },
          })}
          placeholder="Post content"
          type="text"
          minRows={4}
          error={errors.body?.message}
        />

        <Button type="submit" disabled={!isValid}>
          Add post
        </Button>
      </Form>
    </Content>
  );
};
