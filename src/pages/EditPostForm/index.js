import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button, Error, Input, Title } from '../../globalStyles';
import { editOwnPost } from '../../store/slices/posts';
import { Content, Form } from './style';

export const EditPostForm = () => {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reduxData = useSelector((state) => {
    return {
      initPost: state.postDetails.list,
    };
  });

  const formHandler = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = reduxData.initPost.createdAt;
    editedData.userId = reduxData.initPost.userId;
    editedData.id = reduxData.initPost.id;
  };

  const [title, setTitle] = useState(`${reduxData.initPost.title}`);
  const [body, setBody] = useState(`${reduxData.initPost.body}`);

  return (
    <Content>
      <Title>Edit post</Title>
      <Form
        onSubmit={handleSubmit((editedData) => {
          formHandler(editedData);
          resetField('title');
          resetField('body');
          dispatch(editOwnPost(editedData));
          navigate('/posts');
        })}
      >
        <Input
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters long',
            },
          })}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
        <Error>{errors.title?.message}</Error>

        <ReactTextareaAutosize
          {...register('body', {
            required: 'Post content is required',
            minLength: {
              value: 10,
              message: 'Post content must be at least 10 characters long',
            },
          })}
          value={body}
          onChange={(event) => setBody(event.target.value)}
          type="text"
          minRows={4}
          style={{
            fontSize: '20px',
            outline: 'none',
            resize: 'none',
            borderRadius: '10% 90% 10% 90% / 90% 10% 90% 10% ',
            padding: '35px 55px',
          }}
        />
        <Error>{errors.body?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Edit post
        </Button>
      </Form>
    </Content>
  );
};
