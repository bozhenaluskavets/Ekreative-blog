import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import ReactTextareaAutosize from 'react-textarea-autosize';

import { Button } from '../../../globalStyles/buttons.style';
import { Error } from '../../../globalStyles/forms.style';
import { createNewPost } from '../../../store/slices/posts';
import { Content, Form } from './style';
import '../../../globalStyles/textarea.css';
import { InputComponent } from '../../Input';

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

  const formHandler = (data) => {
    const date = new Date().toISOString();
    const userId = reduxData.userInfo.id;
    data.createdAt = date;
    data.updatedAt = date;
    data.userId = userId;
  };

  const onSubmit = (data) => {
    formHandler(data);
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

        <ReactTextareaAutosize
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
          className="styleTextarea"
        />
        <Error>{errors.body?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Add post
        </Button>
      </Form>
    </Content>
  );
};
