import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '../../globalStyles/buttons.style';
import { Error, EditInput } from '../../globalStyles/forms.style';
import { Title } from '../../globalStyles/multiComponents.style';
import { editOwnPost } from '../../store/slices/posts';
import { Content, Form } from './style';

export const EditPostForm = () => {
  const { initPost } = useSelector((state) => {
    return { initPost: state.postDetails.data };
  });

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: initPost.title,
      body: initPost.body,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = initPost.createdAt;
    editedData.userId = initPost.userId;
    editedData.id = initPost.id;
  };

  return (
    <Content>
      <Title>Edit post</Title>
      <Form
        onSubmit={handleSubmit((editedData) => {
          formHandler(editedData);
          resetField('title');
          resetField('body');
          dispatch(editOwnPost(editedData));
          navigate(`/posts/${initPost.id}`);
        })}
      >
        <EditInput
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters long',
            },
          })}
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
